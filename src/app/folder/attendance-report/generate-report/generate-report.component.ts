import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { AttendanceReportService } from '../attendance-report.service';
import * as moment from 'moment'; 
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss'],
})
export class GenerateReportComponent implements OnInit {
  report: any;
  errMsg: any;
  totalSpent: any;
  firstDay: any;
  lastDay: any;
  empId:any;

  // translated values
  lang:any;
  locStorageLang:any;

  constructor(
    public repSer: AttendanceReportService,
    private storage: Storage,
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
        this.empId = window.localStorage.getItem('empId');
      }
  }
  ngOnInit() {
    let date = new Date(); 
    this.firstDay =  moment(new Date(date.getFullYear(), date.getMonth(), 1)).format('YYYY-MM-DD'); 
    this.lastDay = moment(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format('YYYY-MM-DD'); 
    this.getReport();
  }

  getReport(){
    let startDate = moment(this.firstDay).format('YYYY-MM-DD'); 
    let endDate = moment(this.lastDay).format('YYYY-MM-DD'); 
    this.repSer.attenReport(this.empId, startDate, endDate).subscribe(res=>{
      this.report = res['data']
      this.totalSpent = this.report[this.report.length-1].entireWorkDuration
    },err=>{
      this.errMsg = err;
    })
  }

  slice: number = 15;
  doInfinite(infiniteScrollEvent) {
    setTimeout(() => {
      this.slice += 5;
      infiniteScrollEvent.target.complete();
    }, 500);
  }
}
