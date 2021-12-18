import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-addavailability',
  templateUrl: './addavailability.component.html',
  styleUrls: ['./addavailability.component.scss'],
})
export class AddavailabilityComponent implements OnInit {
  userId:any;
  emprecnum:any;

  errMsg:any;
  errTitle:any;
  totalCount:any;
  showSpinner:any;
  nodat:any=false;
  loc:boolean=false;

  categoryList:any;
  customersList:any;
  locationList:any;
  skillsList:any;

  customer_recnum:any;
  category_type:any;
  cust_skill:any;
  cust_locn:any;
  frm_dt:any;
  to_dt:any;
  start_time:any;
  end_time:any;
  status:any;
  siteId:any;


  constructor(private router: Router, private emp: EmpService) { 
    this.userId=window.localStorage.getItem('userId');
    this.emprecnum=window.localStorage.getItem('user2employee');
    this.siteId=window.localStorage.getItem('siteId');

    this.customers();
    this.category();
    this.skills();
  }

  ngOnInit() {}
  goBack(){
    this.router.navigateByUrl('/folder/emp');
  }
  
  customers(){
    this.emp.getCustomer().subscribe(res=>{
      // console.log(res['data']);
      this.customersList = res['data'];
      this.totalCount = this.customersList.length;
      this.showSpinner = false;

      if(this.customersList.length == 0){
        this.nodat=true;
        this.showSpinner = false;
      }
    })
  }

  location(customer_recnum){
    this.loc=true;
    this.emp.getCustLocation(customer_recnum).subscribe(res=>{
      // console.log(res['data']);
      this.locationList = res['data'];
      this.totalCount = this.locationList.length;
      this.showSpinner = false;
      
      if(this.locationList.length == 0){
        this.nodat=true;
        this.showSpinner = false;
      }
    })
  }

  skills(){
    this.emp.getCustSkills().subscribe(res=>{
      // console.log(res['data']);
      this.skillsList = res['data'];
      this.totalCount = this.skillsList.length;
      this.showSpinner = false;
      
      if(this.skillsList.length == 0){
        this.nodat=true;
        this.showSpinner = false;
      }
    })
  }

  category(){
    this.emp.getCategories().subscribe(res=>{
      // console.log(res['data']);
      this.categoryList = res['data'];
      this.totalCount = this.categoryList.length;
      this.showSpinner = false;
      
      if(this.categoryList.length == 0){
        this.nodat=true;
        this.showSpinner = false;
      }
    })
  }

  addAvaialability(){
    let payload = {
      userID:this.userId,
      empid:this.emprecnum,
      clientid:this.customer_recnum,
      link2category:this.category_type,
      skillsetid:this.cust_skill,
      clientlocationid:this.cust_locn,
      fromdate:this.frm_dt,
      todate:this.to_dt,
      strtTime:this.start_time,
      endTime:this.end_time,
      status:this.status,
      siteid:this.siteId
    }
    console.log(payload);
    this.emp.addAvailabilty(payload).subscribe(res=>{
      console.log(res['data']);
    },
    error => {
      this.errTitle='Error!';
      this.errMsg = (error);
    });
  }
}
