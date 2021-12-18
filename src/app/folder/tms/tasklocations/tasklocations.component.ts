import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeolocationOptions, Geoposition, Geolocation, PositionError } from '@ionic-native/geolocation/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { TmsService } from '../tms.service';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-tasklocations',
  templateUrl: './tasklocations.component.html',
  styleUrls: ['./tasklocations.component.scss'],
})
export class TasklocationsComponent implements OnInit {
  empId: any;
  status:any;
  details:any;
  address: string;
  taskAddress:any;

  userId:any;
  taskList
  accepCount: any = 0;
  reOpenCount: any = 0;
  completCount: any = 0;
  rejectCount: any = 0;
  assignedCount:any = 0;

  lat:any;
  lon:any;
  showSpinner: boolean = true;
  previous;

  options: GeolocationOptions;
  currentPos: Geoposition;

  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private router: Router, 
    private route: ActivatedRoute, private nativeStorage: NativeStorage, private tmsSrv: TmsService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    
    this.router.onSameUrlNavigation = 'reload';
    if (navigator)
    {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lon = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
    this.nativeStorage.getItem('loginDetails').then(
      data => console.log(data),
      error => console.error(error)
    );
  }

  ngOnInit() {
    this.userId = window.localStorage.getItem('userId')
    this.tmsSrv.getMyTasksList(this.userId).subscribe(res=>{
      this.taskList = res['data'];
      this.showSpinner = false;
      res['data'].map(val=>{
        if(val.stage == "Created"){ this.assignedCount++;}
        if(val.stage == "Completed") this.completCount++;
        if(val.stage == "Accepted") this.accepCount++;
        if(val.stage == "Reopen") this.reOpenCount++;
        if(val.stage == "Rejected") this.rejectCount++;

        if((val.lat != 0 || val.lat != '') && (this.lat == undefined)) this.lat=Number(val.lat);
        if((val.lon != 0 || val.lon != '') && (this.lon == undefined)) this.lon=Number(val.lon);
      })
    });
    var i=0;    
    this.empId = window.localStorage.getItem('userId');
    this.status = this.route.snapshot.params.status;
    this.tmsSrv.taskLoc(this.empId, this.status).subscribe(res=>{
      this.details = res['data'];
      let goptions: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };

      res['data'].map((val, index)=>{      
      this.nativeGeocoder.forwardGeocode(val.address, goptions)
      .then((result: NativeGeocoderResult[]) => {
        val.lat=result[0].latitude;
        val.lon=result[0].longitude;
        if((val.lat != 0 || val.lat != '') && (this.lat == undefined)) this.lat=Number(val.lat);
        if((val.lon != 0 || val.lon != '') && (this.lon == undefined)) this.lon=Number(val.lon);
        this.lat=result[0].latitude;
        this.lon=result[0].longitude;
      })
      .catch((error: any) => {
        val.lat=0;
        val.lon=0;
        console.log(error)
      });

    });
      if(this.details)this.showSpinner = false;
    });
  }

  clickedMarker(infowindow) {
    if(this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
 }

  breadcrumb() {
    this.router.navigateByUrl('/folder/tms/mytask');
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
         lon: pos.coords.longitude,
         time: new Date(),
       };
      resolve(pos);
     }, (err: PositionError) => {
       console.log("error : " + err.message);
       reject(err.message);
      });
     });
    }
    goToLi(status){
      this.router.navigateByUrl('/folder/tms/taskloc/' +status);    
    }
}
