import { Component, OnInit } from '@angular/core';
import { TmsService } from '../tms.service';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
})
export class NewtaskComponent implements OnInit {
companies:any;
companyid:any;
projects:any;

selectedCompany:any;
selectedProject:any;
taskName:any;
taskDescription:any;
startDate:any;
endDate:any;
duration:any;
status:any;
priority:any;
address:any;
lat:any;
lon:any;
empId:any;
taskNameExisting:any
  constructor(public tmsServ: TmsService, 
              private nativeGeocoder: NativeGeocoder, 
              private router: Router,
              public alertController: AlertController) { 
  }

  ngOnInit() {
    this.empId = window.localStorage.getItem('empId');
    this.companyid = window.localStorage.getItem('companyId');
    // to get Companies
    this.tmsServ.getCompanies().subscribe(res=>{
      this.companies=res['data']
    },err=>{
        // this.errMsg = err;
    });

    // to get all the task names
    this.tmsServ.getTaskname().subscribe(response=>{
      this.taskNameExisting=response['data'];
    },err=>{
       // this.errMsg = err;
    });
    this.getProject();
  }

  getProject() {
    this.tmsServ.getProject(this.companyid).subscribe(res=>{
      this.projects=res['data']
    },err=>{
        // this.errMsg = err;
      })
  }

  checkTaskName() {
    this.taskNameExisting.map(async val=>{
      if(this.taskName == val.taskname) {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Existing Task',
          message: 'Task name already exists, change the task name.',
          buttons: ['OK']
        });    
        await alert.present();
      }    
  });
}

  getAdd(event) {
    this.address=event.detail.value;
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(this.address, options)
      .then((result: NativeGeocoderResult[]) => {
        this.lat=result[0].latitude;
        this.lon=result[0].longitude;
      })
      .catch((error: any) => console.log(error));
  }

  createTask() {
    let payload = { 
      projectid: this.selectedProject,
      taskname: this.taskName, 
      description: this.taskDescription,
      expectedstartdate: this.startDate,
      expectedenddate: this.endDate,
      expectedhours: this.duration,
      status: 1,
      priority: this.priority,
      address: this.address,
      lat: this.lat,
      lon:this.lon,
      empid:this.empId
    }
    this.tmsServ.createTask(payload).subscribe(res=>{
      this.router.navigateByUrl('/folder/tms/mytask');    
    },err=>{
      console.log(err)
    })
  }
}