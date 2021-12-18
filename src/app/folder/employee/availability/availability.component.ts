import { formatDate } from '@angular/common';
import { ConditionalExpr } from '@angular/compiler';
import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import * as moment from 'moment';
import { EmpService } from '../emp.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
})
export class AvailabilityComponent implements OnInit {

  viewTitle: string;
  selectedDate: Date;
  firstDay: any;
  lastDay: any;
  userId:any;
  emprecnum:any;

  unavailabilityList:any;
  allocationsList:any;
  currDt:any;

  events = [];
  eventSource = [];

  dbEventSource = [];
  allocationSource=[];
  
  unavailabilitySource = [];

  availability:boolean=false;
  consecutiveDay:boolean=false;
  allocationStatus:boolean=true;
  remSelectedDt:boolean=false;
  remBackendSelDt:boolean=false;
  remFrmSrcArr:boolean=false;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  // translated values
  lang:any;
  locStorageLang:any;
  availabilityTitle:any;
  unavailableOn:any;
  cancelLbl:any;
  confirmLbl:any;
  enterTime:any;
  makeAvlbl:any;
  NALbl:any;
  NAmsg:any;
  okLbl:any;
  fromLbl:any;
  toLbl:any;
  consecutiveMsg:any;
  cannotMakeUnavlbl:any;
  makeUnavlbl:any;
  allocatedTask:any;
  siteId:any;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private alertCtrl: AlertController,
              private emp: EmpService,
              public translate: TranslateService,
              @Inject(LOCALE_ID) private locale: string,
              ) { 
                this.locStorageLang=window.localStorage.getItem('lang');
                if(this.locStorageLang == '' || this.locStorageLang == undefined || this.locStorageLang == null){
                  this.lang = 'en';
                  this.translate.setDefaultLang('en');
                  this.translate.use('en');
                }else{
                  this.lang = this.locStorageLang;
                  this.translate.use(this.lang);
                }
                this.userId=window.localStorage.getItem('userId');
                this.emprecnum=window.localStorage.getItem('user2employee');
                this.siteId=window.localStorage.getItem('siteId');
              }

  ngOnInit() {
    this.unavailabilitySource=[];
    let date = new Date(); 
    this.firstDay =  moment(new Date(date.getFullYear(), date.getMonth(), 1)).format('YYYY-MM-DD'); 
    this.lastDay = moment(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format('YYYY-MM-DD');

    this.getEmpAvail();
    this.getAllocations();

    // language
    this.translate.get('Availability').subscribe(value => {
    // value is our translated string
    this.availabilityTitle = value;
    });

    this.translate.get('Unavailable on').subscribe(value => { this.unavailableOn = value; });
    this.translate.get('Make available').subscribe(value => { this.makeAvlbl = value; });
    this.translate.get('Not Allowed').subscribe(value => { this.NALbl = value; });
    this.translate.get('Enter time').subscribe(value => { this.enterTime = value; });
    this.translate.get('Cancel').subscribe(value => { this.cancelLbl = value; });
    this.translate.get('Ok').subscribe(value => { this.okLbl = value; });
    this.translate.get('From').subscribe(value => { this.fromLbl = value; });
    this.translate.get('To').subscribe(value => { this.toLbl = value; });
    this.translate.get('Greater than today').subscribe(value => { this.NAmsg = value; });
    this.translate.get('Confirm').subscribe(value => { this.confirmLbl = value; });
    this.translate.get('NALeave').subscribe(value => { this.consecutiveMsg = value; });
    this.translate.get('Make unavailable').subscribe(value => { this.makeUnavlbl = value; });
    this.translate.get('Cannot make Unavailable').subscribe(value => { this.cannotMakeUnavlbl = value; });
    this.translate.get('Allocated task').subscribe(value => { this.allocatedTask = value; });
  }

  getAllocations(){
    this.allocationSource=[];
    this.emp.getAllocations().subscribe(res=>{
      if(res['data']){
        this.allocationsList=res['data']; 
        let len = res['data'].length;
        for(let i=0; i<len; i++) {
          this.allocationSource.push({
            scheduleid: res['data'][i].scheduleid,
            reqid:res['data'][i].reqid,
            startTime: new Date(res['data'][i].date),
            shift:res['data'][i].shift,
            taskid:res['data'][i].taskrecnum,
            taskstatus:res['data'][i].taskstatus,
            taskstage:res['data'][i].taskstage,
          });
        }       
      }
    });
  }

  getEmpAvail() {
    this.events=[];
    this.emp.getEmpAvailability().subscribe(res=>{
      if(res['data']){
        this.unavailabilityList=res['data'];
        let len = res['data'].length;
        for(let i=0; i<len; i++){
          if(res['data'][i].status == 3){
            this.events.push({
              title: res['data'][i].status,
              startTime: new Date(res['data'][i].fromdate),
              endTime: new Date(res['data'][i].todate),
              allDay: true,
              leaveid:res['data'][i].leaveid,
              status:res['data'][i].status
            });
          }
        }
        this.eventSource = this.events;
        this.dbEventSource = this.events;
        this.myCal.loadEvents();
      }
    },err=>{
      // console.log(err);
    })
  }
  next() {
    this.myCal.slideNext();
    this.getEmpAvail();
  }
 
  back() {
    this.myCal.slidePrev();
    this.getEmpAvail();
  }
 
  // Selected date range and hence title changed
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
    if(this.availability == true && this.event.startTime >= this.currDt){

      // To remove from local array
      if((this.availability == true)){
        for(let i=0; i<this.unavailabilitySource.length; i++){
          let newDt = this.unavailabilitySource[i].date.toDateString();
          let selDt = this.event.startTime.toDateString();
          if(newDt === selDt){
            let removed = this.unavailabilitySource.splice(i, 1); 
            this.availability=false;
            this.remSelectedDt=true;
            this.remFrmSrcArr=true;      
            this.myCal.loadEvents();
          }
        }
      }
      // End of local array removal

      // To remove from main array
      if(this.remFrmSrcArr){
        // to remove from main src array which is for insert purpose
        for(let i=0; i<this.eventSource.length; i++){
          let newDt = this.eventSource[i].startTime.toDateString();
          let selDt = this.event.startTime.toDateString();
          if((newDt === selDt) && (this.eventSource[i].title==1)){
            let removed = this.eventSource.splice(i, 1); 
            this.remSelectedDt=true;
            this.remFrmSrcArr=true;            
            this.myCal.loadEvents();
          }
        }
      }
      // End of main array

      // To Remove Existing Unavailablity(In DB) and making Available  && (this.consecutiveDay==false)
      if((this.availability==true) && (this.remSelectedDt==false)){
        for(let i=0; i<this.dbEventSource.length; i++){
          let newDt = this.dbEventSource[i].startTime.toDateString();
          let selDt = this.event.startTime.toDateString();
          if(newDt === selDt){
            if((this.dbEventSource[i].status == 3)){
              let d = this.dbEventSource[i].startTime.getDate();
              let m = this.dbEventSource[i].startTime.getMonth() + 1;
              let y = this.dbEventSource[i].startTime.getFullYear();
              let fullDt = '' +(m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + '-' + y;
              let alert = await this.alertCtrl.create({
                header: this.availabilityTitle,
                subHeader:this.unavailableOn,
                message: fullDt,
                buttons:  [ {
                              text: this.okLbl,
                              role: 'cancel',
                              handler: () => {
                                // console.log('Cancelled');
                              }
                            },
                            {
                              text: this.makeAvlbl,
                              handler: data => {
                                this.emp.updateAvailabilty(this.dbEventSource[i].leaveid).subscribe(res=>{
                                if(res['data'] == 'Success'){
                                  this.getEmpAvail();
                                }
                                },err=>{
                                  console.log(err)
                                }); 
                                this.availability=false; 
                              }
                            }
                          ]
              });
              alert.present();
            }
          }
        }
      }
      // End of Making Available
      
      // Check if any allocations are made && (this.consecutiveDay==false)
      if(this.availability==true){
        for(let i=0; i<this.allocationSource.length; i++){
          let newDt = this.allocationSource[i].startTime.toDateString();
          let selDt = this.event.startTime.toDateString();
          if(newDt === selDt){
            if(this.allocationSource[i].taskstage == 'Accepted'){
              this.availability=false;
              this.allocationStatus=true;
              let alert = await this.alertCtrl.create({
                header: this.NALbl,
                message: this.cannotMakeUnavlbl,
                buttons: [
                  {
                    text: this.okLbl,
                    role: 'cancel',
                    handler: () => {
                      this.allocationStatus=true;
                      this.unavailabilitySource.splice(this.unavailabilitySource.length, 1); 
                      this.eventSource.splice(this.eventSource.length, 1);
                      this.myCal.loadEvents();
                    }
                  }
                ]
              });
              alert.present();
            }else{
              let d = this.allocationSource[i].startTime.getDate();
              let m = this.allocationSource[i].startTime.getMonth() + 1;
              let y = this.allocationSource[i].startTime.getFullYear();
              let fullDt = '' +(m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + '-' + y;
              let alert = await this.alertCtrl.create({
                header: this.confirmLbl,
                subHeader:this.allocatedTask,
                message: fullDt,
                buttons: [
                  {
                    text: this.cancelLbl,
                    role: 'cancel',
                    handler: () => {
                      this.availability=false;
                      this.allocationStatus=false;

                      this.unavailabilitySource.splice(this.unavailabilitySource.length-1, 1); 
                      this.eventSource.splice(this.eventSource.length-1, 1);
                      this.myCal.loadEvents();
                    }
                  },
                  {
                    text: this.confirmLbl,
                    handler: data => {
                      let schedules={
                        userID:this.userId,
                        scheduleid:this.allocationSource[i].scheduleid,
                        reqid:this.allocationSource[i].reqid
                      };
                      this.emp.deAllocateEmp(schedules).subscribe(res=>{
                        if(res['data'] == 'success'){
                          this.availability=true;
                          this.allocationStatus=true;
                        }
                      },err=>{
                        // console.log(err)
                      });  
                    }
                  }
                ]
              });
              alert.present();
            }
          }else{
            this.allocationStatus=true;
          }
        }
      }
      // end of Allocation check

      // To push into the array for insertion purpose
      if((this.availability == true) && (this.allocationStatus == true)){      
        let dt = this.event.startTime.toISOString();
        let endDt = this.event.startTime;
            endDt=new Date(endDt);
        let nwdt = endDt.setDate(endDt.getDate());
        let todt = new Date(nwdt).toISOString();
        let dt_str = this.event.startTime.toDateString(); 

          this.events.push({
            title: 1,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.startTime),
            allDay: true,
            leaveid:null,
            status:3
          });
  
          let payload = {
            userID:this.userId,
            empid:this.emprecnum,
            fromdate:dt,
            todate:todt,
            status:3,
            date:this.event.startTime,
            siteid:this.siteId
          }
          this.unavailabilitySource.push(payload);
          this.eventSource = this.events;
          this.availability=false;          
          this.myCal.loadEvents();
      }
      // End of array push

    }else{
      if(this.availability == true) {
        // if previous day selected
        const alert = await this.alertCtrl.create({
          header: this.NALbl,
          message: this.NAmsg,
          buttons: [this.okLbl],
        });
        alert.present();
      }
    }
  }
  
  addAvailability(currentdt){
    this.currDt=currentdt;
    this.availability=true;
    this.consecutiveDay=false;
    this.allocationStatus=true;
    this.remSelectedDt=false;
    this.remBackendSelDt=false;
    this.remFrmSrcArr=false;
  }

  onSubmit(){
    for(let i=0; i<this.unavailabilitySource.length; i++){
      this.emp.addAvailabilty(this.unavailabilitySource[i]).subscribe(res=>{
        if(res['data'] == "Success"){
          this.getEmpAvail();
        }
      },err=>{
        console.log(err)
      });
    }
    this.myCal.loadEvents();
    this.unavailabilitySource=[];
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    let start = formatDate(event.startTime, 'medium','en-US');
    let end = formatDate(event.endTime, 'medium','en-US');
 
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: this.fromLbl+': ' + start + '<br><br>'+this.toLbl+': ' + end,
      buttons: [this.okLbl],
    });
    alert.present();
  }
}