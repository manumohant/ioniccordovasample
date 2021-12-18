import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx'; 
import { LeaveService } from '../leave.service';
import * as moment from 'moment'; 
import { AlertController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-leave-summary',
  templateUrl: './leave-summary.component.html',
  styleUrls: ['./leave-summary.component.scss'],
})
export class LeaveSummaryComponent implements OnInit {
  lang:any;
  locStorageLang:any;

  enableRequest = false;
  private database: SQLite;
  conObj: SQLiteObject;
  dbObj: SQLiteObject;
  empId: any;
  leaveList: any;
  reason: any;
  endDate: any;
  startDate: any;
  firstDay: any;
  lastDay: any;
  emprecnum:any;
  leaveRequest:boolean=false;
  leaveApplied:boolean=false;
  // consecutiveLeave:boolean=false;
  remFrmSrcArr:boolean=false;
  events = [];
  currDt:any;

  eventSource = [];
  leaveSource = [];
  dbEventSource = [];
  viewTitle: string;
  siteId:any;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  event = {
    title: 'Leave Applied',
    startTime: null,
    endTime: '',
    allDay: true
  };

  leaveData:any;

  selectedDate: Date;
  modalReady = false;
  remSelectedDt:boolean=false;
  remBackendSelDt:boolean=false;

  // translated values
  cancelLbl:any;
  cancelLeave:any;
  cancelMsg:any;
  NALbl:any;
  NAmsg:any;
  okLbl:any;
  fromLbl:any;
  toLbl:any;
  NAprevdt:any;
  greaterDayMsg:any;


  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private sqlite: SQLite,
              public leavSer: LeaveService,
              private alertCtrl: AlertController,
              public translate: TranslateService,
              @Inject(LOCALE_ID) private locale: string,) 
              { 
                this.siteId=window.localStorage.getItem('siteId');
                this.locStorageLang=window.localStorage.getItem('lang');
                if(this.locStorageLang == '' || this.locStorageLang == undefined || this.locStorageLang == null){
                  this.lang = 'en';
                  this.translate.setDefaultLang('en');
                  this.translate.use('en');
                }else{
                  this.lang = this.locStorageLang;
                  this.translate.use(this.lang);
                }
                this.emprecnum = window.localStorage.getItem('user2employee');
              }

  ngOnInit() {
    this.leaveSource=[];
    let date = new Date(); 
    this.firstDay =  moment(new Date(date.getFullYear(), date.getMonth(), 1)).format('YYYY-MM-DD'); 
    this.lastDay = moment(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format('YYYY-MM-DD'); 

    // language
    this.translate.get('Not Allowed').subscribe(value => { this.NALbl = value; });
    this.translate.get('NALeave').subscribe(value => { this.NAmsg = value; });
    this.translate.get('Cancel').subscribe(value => { this.cancelLbl = value; });
    this.translate.get('Ok').subscribe(value => { this.okLbl = value; });
    this.translate.get('From').subscribe(value => { this.fromLbl = value; });
    this.translate.get('To').subscribe(value => { this.toLbl = value; });
    this.translate.get('Cancel Leave').subscribe(value => { this.cancelLeave = value; });
    this.translate.get('Cancel Msg').subscribe(value => { this.cancelMsg = value; });
    this.translate.get('Not Allowed').subscribe(value => { this.NAprevdt = value; });
    this.translate.get('Greater than today').subscribe(value => { this.greaterDayMsg = value; });

    this.getLeaves();
  }

  getLeaves() {
    this.events=[];
    this.dbEventSource=[];
    this.empId = window.localStorage.getItem('user2employee');
    let fDay = moment(this.firstDay).format('YYYY-MM-DD'); 
    let lDay = moment(this.lastDay).format('YYYY-MM-DD'); 
    this.leavSer.leaves(this.empId, fDay, lDay).subscribe(res=>{
      if(res['data']){
        let len = res['data'].length;
        for(let i=0; i<len; i++){
          if(res['data'][i].status == 1 || res['data'][i].status == 0){
            this.events.push({
              title: res['data'][i].status,
              startTime: new Date(res['data'][i].fromdate),
              endTime: new Date(res['data'][i].todate),
              allDay: true,
              leaveid:res['data'][i].id,
              status:res['data'][i].status
            });
          }
        }
        this.dbEventSource = this.events;
        this.eventSource = this.events;
        this.myCal.loadEvents();
      }
    },err=>{
      console.log(err);
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;    
    }, 0);
  }
   // Change current month/week/day
   next() {
    this.myCal.slideNext();
    this.getLeaves();
  }
 
  back() {
    this.myCal.slidePrev();
    this.getLeaves();
  }
 
  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  
  async onTimeSelected(ev) {   
    this.event.startTime = new Date(ev.selectedTime);

    let dt = this.event.startTime.toISOString();
    let endDt = this.event.startTime;
    endDt=new Date(endDt);
    let nwdt = endDt.setDate(endDt.getDate());
    let todt = new Date(nwdt).toISOString();
    let dt_str = this.event.startTime.toDateString();

    if(this.leaveRequest == true && this.event.startTime >= this.currDt){
      //To avoid applying leaves on consecutive days.
      // for(let i=0; i<this.eventSource.length; i++){
      //   let d1 = moment(this.eventSource[i].startTime.toLocaleDateString());
      //   let d2 = moment(this.event.startTime.toLocaleDateString());
      //   let diffDays = d2.diff(d1, 'days');
      //   if((diffDays == 1 || diffDays == -1) && this.consecutiveLeave==false){
      //     this.consecutiveLeave=true;
      //     let alert = await this.alertCtrl.create({
      //       header: this.NALbl,
      //       message: this.NAmsg,
      //       buttons: [
      //         {
      //           text: this.okLbl,
      //           role: 'cancel',
      //           handler: () => {
      //             this.leaveRequest=false;
      //           }
      //         }
      //       ]
      //     });
      //     alert.present();
      //   }
      // }
      //end of consecutive day leaves

      // to remove from source array which is for insert purpose
      for(let i=0; i<this.leaveSource.length; i++){
        let newDt = this.leaveSource[i].date.toDateString();
        let selDt = this.event.startTime.toDateString();
        if(newDt === selDt){
          var removed = this.leaveSource.splice(i, 1); 
          this.remSelectedDt=true;
          this.remFrmSrcArr=true;  
          this.myCal.loadEvents();
        }
      }

      if(this.remFrmSrcArr){
        // to remove from main src array which is for insert purpose
        for(let i=0; i<this.eventSource.length; i++){
          let newDt = this.eventSource[i].startTime.toDateString();
          let selDt = this.event.startTime.toDateString();
          if((newDt === selDt) && (this.eventSource[i].title==12)){
            let removed = this.eventSource.splice(i, 1); 
            this.remSelectedDt=true;
            this.remFrmSrcArr=true;            
            this.myCal.loadEvents();
          }
        }
      }
      // end of selected array

      // to remove from dbEventsource(leaves list from backend)
      for(let i=0; i<this.dbEventSource.length; i++){
        let newDt = this.dbEventSource[i].startTime.toDateString();
        let selDt = this.event.startTime.toDateString();
        if(newDt === selDt){
          if((this.dbEventSource[i].status == 0)&&(this.remBackendSelDt==false)){
            let alert = await this.alertCtrl.create({
              header: this.cancelLeave,
              subHeader:this.cancelMsg,
              message: this.dbEventSource[i].startTime.toDateString(),
              buttons: [
                {
                  text: this.okLbl,
                  role: 'cancel',
                  handler: () => {
                  }
                },
                {
                  text: this.cancelLeave,
                  handler: data => {
                    this.leavSer.updateLeave(this.dbEventSource[i].leaveid).subscribe(res=>{
                      if(res['data'] == 'Success'){
                        this.getLeaves();
                      }
                    },err=>{
                      // console.log(err)
                    });  
                    this.leaveRequest=false; 
                  }
                }
              ]
            });
            alert.present();
          }
          this.remBackendSelDt=true;
        }
      }
      // && !this.consecutiveLeave
      if(!this.remSelectedDt && (this.remBackendSelDt==false)){
        this.events.push({
          title: 12,
          startTime: new Date(this.event.startTime),
          endTime: new Date(this.event.startTime),
          allDay: true,
          leaveid:null,
          status:0
        });
  
        this.leaveData={
          EmpId:this.emprecnum,
          FromDate:dt,
          ToDate:todt,
          Status:0,
          date:this.event.startTime,
          siteid:this.siteId
        }
        this.leaveSource.push(this.leaveData);
        this.eventSource = this.events;
        this.leaveRequest=false;
        this.myCal.loadEvents();
      }
      // console.log(this.leaveSource);
    }else {
      if(this.leaveRequest == true){
        const alert = await this.alertCtrl.create({
          header: this.NAprevdt,
          message: this.greaterDayMsg ,
          buttons: [this.okLbl],
        });
        alert.present();
  
      }
    }
  }
  onSubmit(){
    for(let i=0; i<this.leaveSource.length; i++){
      this.leavSer.applyLeave(this.leaveSource[i]).subscribe(res=>{
        if(res['data'] == "requested"){
          this.getLeaves();
        }
      },err=>{
        console.log(err)
      });
    }
    this.myCal.loadEvents();
    this.leaveSource=[];
  }

  applyLeave(currentDt){
      this.leaveRequest=true;
      this.leaveApplied=false;
      this.currDt=currentDt;

      this.remSelectedDt=false;
      // this.consecutiveLeave=false;
      this.remBackendSelDt=false;
      this.remFrmSrcArr=false; 
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start= new Date(event.startTime);
    let end=new Date(event.endTime);
 
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: this.fromLbl+': ' + start + '<br><br>'+this.toLbl+': ' + end,
      buttons: [this.okLbl],
    });
    alert.present();
  }  
}