import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TmsService } from '../tms.service';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.scss'],
})
export class TaskDescriptionComponent implements OnInit {

  reason: any;
  id: any;
  details:any;
  resonTab: boolean = false;
  workDuration: any;
  totalSpent: any
  showSpinner: boolean = true;
  address: string;
  currentDay:any;
  startingAt:any;
  endingAt:any;

  lang:any;
  locStorageLang:any;

  // language
  addressNA:any;
  
  constructor(private route: ActivatedRoute,
              public tmsSrv: TmsService,
              public router: Router,
              private nativeGeocoder: NativeGeocoder,
              public translate: TranslateService) { 
                this.locStorageLang=window.localStorage.getItem('lang');
                if(this.locStorageLang == '' || this.locStorageLang == undefined || this.locStorageLang == null){
                  this.lang = 'en';
                  this.translate.setDefaultLang('en');
                  this.translate.use('en');
                }else{
                  this.lang = this.locStorageLang;
                  this.translate.use(this.lang);
                }
                this.translate.get('Address NA').subscribe(value => { this.addressNA = value; });
              }

  ngOnInit() {
    this.currentDay = new Date();
    this.id = this.route.snapshot.params.id;
    this.tmsSrv.taskDes(this.id).subscribe(res=>{

    this.startingAt = res['data'].start_date;
    this.endingAt = res['data'].finish_date;

    this.startingAt = new Date(this.startingAt);
    this.endingAt = new Date(this.endingAt);
    
    this.details = res['data'];

    let goptions: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(this.details.lat, this.details.lon, goptions)
      .then((result: NativeGeocoderResult[]) => {        
        this.address = "";
        var responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);
        }
        responseAddress.pop();
        responseAddress.reverse();
        for (let value of responseAddress) {                                                                   
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = this.addressNA;
      });

      if( this.details)this.showSpinner = false;
    })

    this.tmsSrv.timeSpent(this.id).subscribe(res=>{ } )
  }

  rej(){
    this.resonTab = false;
    this.tmsSrv.updateTaskStatus(this.id, 'Rejected').subscribe(res=>{
      // console.log(res);
      this.details.statusString = res['data'].statusString
      this.router.navigateByUrl('/folder/tms/mytask');
    });
  }

  breadcrumb() {
    this.router.navigateByUrl('/folder/tms/mytask');
  }
  accept(){
    this.tmsSrv.updateTaskStatus(this.id, 'Accepted').subscribe(res=>{
    // console.log(res);
    this.router.navigateByUrl('/folder/punch/in/' + res['data'].task_id);
    }); 
    // this.router.navigateByUrl('/folder/punch/in/' + this.id);
  }

  goBack(){
    this.router.navigateByUrl('/folder/tms/mytask');
  }
}
