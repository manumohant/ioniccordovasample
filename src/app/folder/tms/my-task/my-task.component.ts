import { Component, OnInit } from '@angular/core';
import { TmsService } from '../tms.service';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss'],
})
export class MyTaskComponent implements OnInit {
  taskList: any;
  userId: any;
  accepCount: any = 0;
  reOpenCount: any = 0;
  completCount: any = 0;
  rejectCount: any = 0;
  assignedCount:any = 0;
  totalCount:any = 0;
  showSpinner: boolean = true;
  nodat:boolean = false;
  currentDay:any;
  firstDay: string = new Date().toISOString();
  lastDay: any;
  completeTaskList:any;

  lang:any;
  locStorageLang:any;

  constructor(public tmsServ: TmsService,
              private router: Router,
              private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              private _location: Location,
              public alertController: AlertController,
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

                let date = new Date(); 
                this.firstDay =  moment(new Date(date.getFullYear(), date.getMonth(), date.getDate()-1)).format('YYYY-MM-DD'); 
                this.lastDay = moment(new Date(date.getFullYear(), date.getMonth(), date.getDate())).format('YYYY-MM-DD');
              }

  ngOnInit() {
    this.accepCount=0;
    this.reOpenCount=0;
    this.completCount=0;
    this.rejectCount=0;
    this.assignedCount=0;
    this.totalCount=0;
    this.currentDay = new Date();
    this.nodat=false;

    this.router.navigateByUrl('/folder/tms/mytask', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/folder/tms/mytask']);
    });
    this.userId = window.localStorage.getItem('userId');
    // to get current date
    // let tDay:string = new Date().toISOString();

    let startDate = moment(this.firstDay).format('YYYY-MM-DD'); 
    let endDate = moment(this.lastDay).format('YYYY-MM-DD'); 
      
    this.tmsServ.getTaskList(this.userId, startDate, endDate).subscribe(res=>{
      this.taskList = res['data'];
      this.totalCount = this.taskList.length;
      this.showSpinner = false;
      res['data'].map(val=>{
        if(val.stage == "Created") this.assignedCount++;
        if(val.stage == "Completed") this.completCount++;
        if(val.stage == "Accepted") this.accepCount++;
        if(val.stage == "Reopen") this.reOpenCount++;
        if(val.stage == "Rejected") this.rejectCount++;
      })
      if(this.taskList.length == 0){
        this.nodat=true;
        this.showSpinner = false;
      }
    })
  }

  switchLanguage() {
    window.localStorage.setItem('lang', this.lang);
    this.translate.use(this.lang);
  }

  goToDes(tid, status, name){
    if(status == 'Accepted'){
      this.router.navigateByUrl('/folder/punch/in/' + tid);
    }else{
      this.router.navigateByUrl('/folder/tms/taskDes/' + tid);
    }
  }

  goToLoc(status){
    this.router.navigateByUrl('/folder/tms/taskloc/' +status);    
  }

  goToLi(status) {
    this.accepCount=0;
    this.reOpenCount=0;
    this.completCount=0;
    this.rejectCount=0;
    this.assignedCount=0;
    this.totalCount=0;
    this.currentDay = new Date();
    this.nodat=false;

    let startDate = moment(this.firstDay).format('YYYY-MM-DD'); 
    let endDate = moment(this.lastDay).format('YYYY-MM-DD'); 

    this.tmsServ.getTaskList(this.userId, startDate, endDate).subscribe(res=>{
      this.taskList = res['data'];
      this.totalCount = this.taskList.length;
      this.showSpinner = false;
      res['data'].map(val=>{
        if(val.stage == "Created") this.assignedCount++;
        if(val.stage == "Completed") this.completCount++;
        if(val.stage == "Accepted") this.accepCount++;
        if(val.stage == "Reopen") this.reOpenCount++;
        if(val.stage == "Rejected") this.rejectCount++;
      })
      if(status == 'All') {
        this.taskList = res['data'];
        if(this.taskList.length == 0){
          this.nodat=true;
        }else this.nodat=false;
      }else{
        this.taskList = this.taskList.filter(tasklist => tasklist.stage == status);
        if(this.taskList.length == 0){
          this.nodat=true;
        }else this.nodat=false;
      }
      // console.log(this.taskList);    
    })  
  }

  slice: number = 7;
  doInfinite(infiniteScrollEvent) {
    setTimeout(() => {
      this.slice += 5;
      infiniteScrollEvent.target.complete();
    }, 500);
  } 
}