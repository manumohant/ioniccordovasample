import { Component, OnInit } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import {HttpClient} from '@angular/common/http';
import { CheckIncheckOutService } from '../check-incheck-out.service';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { TmsService } from '../../tms/tms.service';
import { AlertController } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  id: any;
  type : any =  window.localStorage.getItem('AtteType')
  lat:any;
  lng:any;
  options: GeolocationOptions;
  currentPos: Geoposition;
  currentDay: any;
  checkoutDay: any;
  checkInDay: any;
  errorMsg: any;
  enableCheckOut;
  enableCheckIn;
  enableBreak;
  enableComplet;
  empId: any;
  empDetails: any;
  tasknam: any;
  breakDay: any;
  notesTab: boolean = false;
  notes:any;
  address:any;
  taskCompletion:boolean =false;
  startingAt:any;
  endingAt:any;

  lang:any;
  locStorageLang:any;

  confirm_completion:any;
  complete_task:any;
  ok:any;
  cancel:any;

  constructor(private geolocation: Geolocation,
              public checkSer: CheckIncheckOutService,
              private storage: Storage,
              private nativeStorage: NativeStorage,
              private router: Router,
              private route: ActivatedRoute,
              public tmsSrv: TmsService,
              public alertController: AlertController,
              private nativeGeocoder: NativeGeocoder,
              public translate: TranslateService
              ) {
                // language
                this.locStorageLang=window.localStorage.getItem('lang');
                if(this.locStorageLang == '' || this.locStorageLang == undefined || this.locStorageLang == null){
                  this.lang = 'en';
                  this.translate.setDefaultLang('en');
                  this.translate.use('en');
                }else{
                  this.lang = this.locStorageLang;
                  this.translate.use(this.lang);
                }

                this.router.routeReuseStrategy.shouldReuseRoute = function() {
                  return false;
              };
              this.router.onSameUrlNavigation = 'reload';
    if (navigator){
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }

    this.nativeStorage.getItem('loginDetails').then(
      data => console.log(data),
      error => console.error(error)
    );
    this.translate.get('Confirm completion').subscribe(value => { this.confirm_completion = value; });
    this.translate.get('Complete task').subscribe(value => { this.complete_task = value; });
    this.translate.get('Ok').subscribe(value => { this.ok = value; });
    this.translate.get('Cancel').subscribe(value => { this.cancel = value; });

  }
  switchLanguage() {
    this.translate.use(this.lang);
  }
  checkIn() {
    let dte = new Date();
    let yr = dte.getFullYear();
    let mnth:any = dte.getMonth();
    mnth = mnth+1;
    
    // this.checkInDay=false;

    if(mnth <= 9){
      mnth = "0"+mnth;
    }
    let dt:any = dte.getDate();
    if(dt <= 9){
      dt = "0"+dt;
    }
    let hrs:any = dte.getHours();
    if(hrs <= 9){
      hrs = "0"+hrs;
    }
    let min:any = dte.getMinutes();
    if(min <= 9){
      min = "0"+min;
    }
    let sec:any = dte.getSeconds();
    if(sec <= 9){
      sec = "0"+sec;
    }
    this.checkInDay = yr+"-"+mnth+"-"+dt+" "+hrs+":"+min+":"+sec;

    this.enableCheckOut = true;
    this.enableCheckIn = false;
    this.enableBreak = true;
    this.enableComplet = false;
    // this.checkInDay = new Date();
    this.notesTab = true;
    let addr:any;
    let goptions: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };    
  this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions)
    .then((result: NativeGeocoderResult[]) => {
      addr = { 
        "address1": result[0]['subThoroughfare']+", "+result[0]['thoroughfare'],
        "address2": result[0]['subLocality']+", "+result[0]['locality'],
        "city": result[0]['subAdministrativeArea'],
        "state": result[0]['administrativeArea'],
        "zipcode": result[0]['postalCode'],
        "country": result[0]['countryName']
      }
      this.address=addr;
    })
    .catch((error: any) => {
    });

    let payLoad = { 
      "DateTime": this.checkInDay,
      "InOutStatus": "1",
      "TaskId": this.id,
      "Lat": this.lat,
      "Lon": this.lng,
      "address": this.address,
      "userId": window.localStorage.getItem('userId'),
      "CompanyId": window.localStorage.getItem('companyId'),
      "notes": this.notes,
      "empID": window.localStorage.getItem('empId'),
      "siteid": window.localStorage.getItem('siteId'),
    }
    return payLoad;
  }

  checkOut() {
    let dte = new Date();
    let yr = dte.getFullYear();
    let mnth:any = dte.getMonth();
    mnth = mnth+1;
    // this.checkoutDay=false;
    if(mnth <= 9){
      mnth = "0"+mnth;
    }
    let dt:any = dte.getDate();
    if(dt <= 9){
      dt = "0"+dt;
    }
    let hrs:any = dte.getHours();
    if(hrs <= 9){
      hrs = "0"+hrs;
    }
    let min:any = dte.getMinutes();
    if(min <= 9){
      min = "0"+min;
    }
    let sec:any = dte.getSeconds();
    if(sec <= 9){
      sec = "0"+sec;
    }
    this.checkoutDay = yr+"-"+mnth+"-"+dt+" "+hrs+":"+min+":"+sec;

    this.enableCheckIn = true;
    this.enableCheckOut = false;
    this.enableBreak = false;
    this.enableComplet = true;
    // this.checkoutDay = new Date();
    let addr:any;
    let goptions: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };    
    this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions)
      .then((result: NativeGeocoderResult[]) => {
        addr = { 
          "address1": result[0]['subThoroughfare']+", "+result[0]['thoroughfare'],
          "address2": result[0]['subLocality']+", "+result[0]['locality'],
          "city": result[0]['subAdministrativeArea'],
          "state": result[0]['administrativeArea'],
          "zipcode": result[0]['postalCode'],
          "country": result[0]['countryName']
        }
        this.address=addr;
      })
    .catch((error: any) => {
    });

    if(this.type == 'TMS'){
      let payLoad = { 
        "DateTime": this.checkoutDay,
        "InOutStatus": "0",
        "TaskId":this.id,
        "Lat": this.lat,
        "Lon": this.lng,
        "address": this.address,
        "empID": window.localStorage.getItem('empId'),
        "CompanyId": window.localStorage.getItem('companyId'),
        "siteid": window.localStorage.getItem('siteId'),
      }
      this.checkSer.tmsCheckIn(payLoad).subscribe(res=>{
        this.enableComplet = true;
      }, err=>{
        console.log(err)
      }) 
    }
  }

  break(){
    let dte = new Date();
    let yr = dte.getFullYear();
    let mnth:any = dte.getMonth();
    mnth = mnth+1;
    if(mnth <= 9){
      mnth = "0"+mnth;
    }
    let dt:any = dte.getDate();
    if(dt <= 9){
      dt = "0"+dt;
    }
    let hrs:any = dte.getHours();
    if(hrs <= 9){
      hrs = "0"+hrs;
    }
    let min:any = dte.getMinutes();
    if(min <= 9){
      min = "0"+min;
    }
    let sec:any = dte.getSeconds();
    if(sec <= 9){
      sec = "0"+sec;
    }
    this.breakDay = yr+"-"+mnth+"-"+dt+" "+hrs+":"+min+":"+sec;

    this.enableCheckIn = true;
    this.enableCheckOut = false;
    this.enableBreak = false;
    this.enableComplet = false;
    // this.breakDay = new Date();
    let addr:any;
    let goptions: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };    
    this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions)
    .then((result: NativeGeocoderResult[]) => {
      addr = { 
        "address1": result[0]['subThoroughfare']+", "+result[0]['thoroughfare'],
        "address2": result[0]['subLocality']+", "+result[0]['locality'],
        "city": result[0]['subAdministrativeArea'],
        "state": result[0]['administrativeArea'],
        "zipcode": result[0]['postalCode'],
        "country": result[0]['countryName']
      };
      this.address=addr; 
    })
    .catch((error: any) => {  });

    let payLoad = { 
      "DateTime": this.breakDay,
      "InOutStatus": "2",
      "TaskId": this.id,
      "Lat": this.lat,
      "Lon": this.lng,
      "address": this.address,
      "empID": window.localStorage.getItem('empId'),
      "CompanyId": window.localStorage.getItem('companyId'),
      "siteid": window.localStorage.getItem('siteId'),
    }
    this.checkSer.tmsCheckIn(payLoad).subscribe(res=>{
    }, err=>{
      console.log(err)
    })
  }

  completed() {
    let dte = new Date();
    let yr = dte.getFullYear();
    let mnth:any = dte.getMonth();
    mnth = mnth+1;
    // this.checkInDay=false;
    if(mnth <= 9){
      mnth = "0"+mnth;
    }
    let dt:any = dte.getDate();
    if(dt <= 9){
      dt = "0"+dt;
    }
    let hrs:any = dte.getHours();
    if(hrs <= 9){
      hrs = "0"+hrs;
    }
    let min:any = dte.getMinutes();
    if(min <= 9){
      min = "0"+min;
    }
    let sec:any = dte.getSeconds();
    if(sec <= 9){
      sec = "0"+sec;
    }
    this.checkInDay = yr+"-"+mnth+"-"+dt+" "+hrs+":"+min+":"+sec;

    this.enableCheckIn = false;
    this.enableCheckOut = false;
    this.enableBreak = false;
    this.enableComplet = true;
    // this.checkInDay = new Date();
    this.notesTab = true;
    this.taskCompletion = true;
    let addr:any;
    let goptions: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };    
    this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions)
    .then((result: NativeGeocoderResult[]) => {
      addr = { 
        "address1": result[0]['subThoroughfare']+", "+result[0]['thoroughfare'],
        "address2": result[0]['subLocality']+", "+result[0]['locality'],
        "city": result[0]['subAdministrativeArea'],
        "state": result[0]['administrativeArea'],
        "zipcode": result[0]['postalCode'],
        "country": result[0]['countryName']
      }
      this.address=addr;
    })
    .catch((error: any) => { } );

    let payLoad = { 
      "DateTime": this.checkInDay,
      "InOutStatus": "3",
      "TaskId": this.id,
      "Lat": this.lat,
      "Lon": this.lng,
      "address": this.address,
      "userId": window.localStorage.getItem('userId'),
      "CompanyId": window.localStorage.getItem('companyId'),
      "empID": window.localStorage.getItem('empId'),
      "notes": this.notes,
      "siteid": window.localStorage.getItem('siteId'),
    }
    return payLoad;
  }

  async statusComplet(){
    let dte = new Date();
    let yr = dte.getFullYear();
    let mnth:any = dte.getMonth();

    mnth = mnth+1;

    if(mnth <= 9){
      mnth = "0"+mnth;
    }
    let dt:any = dte.getDate();
    if(dt <= 9){
      dt = "0"+dt;
    }
    let hrs:any = dte.getHours();
    if(hrs <= 9){
      hrs = "0"+hrs;
    }
    let min:any = dte.getMinutes();
    if(min <= 9){
      min = "0"+min;
    }
    let sec:any = dte.getSeconds();
    if(sec <= 9){
      sec = "0"+sec;
    }
    this.checkInDay = yr+"-"+mnth+"-"+dt+" "+hrs+":"+min+":"+sec;

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.confirm_completion,
      message: this.complete_task,
      buttons: [{
        text: this.ok,
        handler: () => {
          this.tmsSrv.updateEndTaskStatus(this.id, 'Completed', this.checkInDay).subscribe(res=>{
            this.completed();
            });
         }
      }, {
        text: this.cancel,
        role: 'cancel'
      }]
    });
    await alert.present();
  }

  submitNotes() {
    let payload;
    if(this.enableComplet) {
      payload=this.completed();
      this.notes;
      this.checkSer.tmsCheckIn(payload).subscribe(res=>{
      }, err=>{
        console.log(err)
      });
      this.router.navigateByUrl('/folder/tms/mytask');
      this.notesTab = false;
    }else {
      payload=this.checkIn();
      this.notesTab = false;
      this.notes;
      this.checkSer.tmsCheckIn(payload).subscribe(res=>{
      }, err=>{
        console.log(err)
      })
    } 
  }
  
  breadcrumb() {
    this.router.navigateByUrl('/folder/tms/mytask');
  }

  ngOnInit() {
    let dte = new Date();
    let yr = dte.getFullYear();
    let mnth:any = dte.getMonth();
    mnth = mnth+1;
    if(mnth <= 9){
      mnth = "0"+mnth;
    }
    let dt:any = dte.getDate();
    if(dt <= 9){
      dt = "0"+dt;
    }
    let hrs:any = dte.getHours();
    if(hrs <= 9){
      hrs = "0"+hrs;
    }
    let min:any = dte.getMinutes();
    if(min <= 9){
      min = "0"+min;
    }
    let sec:any = dte.getSeconds();
    if(sec <= 9){
      sec = "0"+sec;
    }
    this.currentDay = yr+"-"+mnth+"-"+dt+" "+hrs+":"+min+":"+sec;

    this.enableCheckIn = true;
    this.enableCheckOut = false;
    this.enableBreak = false;
    this.enableComplet = false;
    this.id = this.route.snapshot.params.id;
    // this.currentDay = new Date();
    this.empId = window.localStorage.getItem('empId');
    
    if(this.type == 'TMS'){
      this.tmsSrv.taskDes(this.id).subscribe(res=>{
        this.tasknam = res['data'].taskName;
        
        this.startingAt = res['data'].start_date;
        this.endingAt = res['data'].finish_date;

        this.startingAt = new Date(this.startingAt);
        this.endingAt = new Date(this.endingAt);
      })
      
      // if((this.currentDay >= this.startingAt) || (this.currentDay <= this.endingAt)){
        this.tmsSrv.lastTaskStatus(this.id).subscribe(res=>{
          if(res['data'].inOutStatus == 1){
            this.enableCheckOut = true;
            this.enableCheckIn = false;
            this.enableBreak = true
            this.enableComplet = false;
            this.checkInDay = res['data'].dateTime;    
          }else if(res['data'].inOutStatus == 0){
            this.enableCheckIn = true;
            this.enableCheckOut = false;
            this.enableBreak = false;
            this.enableComplet = true;
            this.checkoutDay = res['data'].dateTime;
          }else if(res['data'].inOutStatus == 2){
            this.enableCheckIn = true;
            this.enableCheckOut = false;
            this.enableBreak = false;
            this.enableComplet = false;
          }else if(res['data'].inOutStatus == 3){
            this.enableCheckIn = false;
            this.enableCheckOut = false;
            this.enableBreak = false;
            this.enableComplet = false;
          }
        }, err=>{
          console.log(err)
        })
      // }else{
      //   this.enableCheckIn = false;
      //   this.enableCheckOut = false;
      //   this.enableBreak = false;
      //   this.enableComplet = false;
      //   alert("Checkin Not allowed");
      // }
    }
  }

  getUserPosition() {
    return new Promise((resolve, reject) => {
    this.options = {
      maximumAge: 3000,
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
      this.currentPos = pos;
      const location = {
         lat: pos.coords.latitude,
         lng: pos.coords.longitude,
         time: new Date(),
       };
      resolve(pos);
     }, (err: PositionError) => {
       console.log("error : " + err.message);
       reject(err.message);
      });
     });
    }

    goBack(){
      this.router.navigateByUrl('/folder/tms/mytask');
    }
}