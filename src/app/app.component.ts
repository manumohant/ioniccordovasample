import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@awesome-cordova-plugins/background-geolocation/ngx';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  slice: number;
  type : any =  window.localStorage.getItem('AtteType');
  backButtonSubscription;
  mySubscription: any;
  userID : any;
  lang:any;
  locStorageLang:any;

  confirm:any;
  stay:any;
  exit:any;
  cancel:any;
  exitMsg:any;

  welcome_user: any = window.localStorage.getItem('userId');

  public appPages = [
    // {
    //   title: 'Attendance',
    //   url: '/folder/punch/in/AMS',
    //   icon: 'calendar'
    // },
    {
      title: 'TMS',
      url: '/folder/tms/mytask',
      // icon: 'alarm'
    },
    {
      title: 'Timesheet',
      url: '/folder/attendanceRep/rep',
      // icon: 'documents'
    },
    {
      title: 'Availability',
      url: '/folder/emp',
      // icon: 'calendar'
    },
    // {
    //   title: 'New Task',
    //   url: '/folder/tms/newtask',
    //   icon: 'clipboard'
    // },
    {
      title: 'Leaves',
      url: '/folder/leave/lea',
      // icon: 'today'
    },
    {
      title: 'About',
      url: '/folder/signUp/about',
      // icon: 'information-circle'
    },
    {
      title: 'Terms',
      url: '/folder/signUp/terms',
      // icon: 'document-text'
    }
  ];
  public labels = [
    {
      title: 'Attendance',
      url: '/folder/punch/in/AMS',
      // icon: 'calendar'
    },
    {
      title: 'TMS',
      url: '/folder/tms/mytask',
      // icon: 'alarm'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public alertController: AlertController,
    private storage: Storage,
    private route: ActivatedRoute,
    private _location: Location,
    public translate: TranslateService,
    private geolocation: Geolocation,
    private backgroundGeolocation: BackgroundGeolocation,
    private localNotifications: LocalNotifications
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

      this.translate.get('Confirm').subscribe(value => { this.confirm = value; });
      this.translate.get('Stay').subscribe(value => { this.stay = value; });
      this.translate.get('Exit').subscribe(value => { this.exit = value; });
      this.translate.get('Cancel').subscribe(value => { this.cancel = value; });
      this.translate.get('Exit msg').subscribe(value => { this.exitMsg = value; });

      this.userID = window.localStorage.getItem('userId');
      this.initializeApp();
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
    this.router.onSameUrlNavigation = 'reload';
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      const config: BackgroundGeolocationConfig = {
              desiredAccuracy: 0, // high
              stationaryRadius: 1,
              distanceFilter: 1,
              debug: false, //  enable this hear sounds for background-geolocation life-cycle.
              stopOnTerminate: false, // enable this to clear background location settings when the app terminates
              startOnBoot:true,
              interval:1000,
              fastestInterval:1000,
              notificationsEnabled:true,
              notificationTitle:'FluentMTMCB',
              notificationText:'Your location is being monitored'
      };
      this.geolocation.watchPosition().subscribe(data=>{
        this.track(data.coords);
      });
      this.backgroundGeolocation.configure(config).then(() => {
        this.backgroundGeolocation.getCurrentLocation().then(data=>{
          this.track(data);
        });
        this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
          this.track(location);
          if(this.platform.is('ios')) this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
        this.backgroundGeolocation.on(BackgroundGeolocationEvents.stationary).subscribe((location: BackgroundGeolocationResponse) => {
          this.track(location);
          if(this.platform.is('ios')) this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
        this.backgroundGeolocation.on(BackgroundGeolocationEvents.activity).subscribe((location: BackgroundGeolocationResponse) => {
          this.track(location);
          if(this.platform.is('ios')) this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
        this.backgroundGeolocation.on(BackgroundGeolocationEvents.background).subscribe((location: BackgroundGeolocationResponse) => {
          this.track(location);
          if(this.platform.is('ios')) this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });

      });

      // start recording location
      this.backgroundGeolocation.start();
    });
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      // console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/folder/tms/mytask') 
      || this._location.isCurrentPathEqualTo('/folder/leave/lea') 
      || this._location.isCurrentPathEqualTo('/folder/signUp/about') 
      || this._location.isCurrentPathEqualTo('/folder/signUp/login')) {
        // Show Exit Alert!
        // console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {
        // Navigate to back page
        // console.log('Navigate to back page');
        this._location.back();
      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      // console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });

  }
  track(location: any){
    
    let officeLat = 10.0173107; // read this from localstorage or API
    let officeLon = 76.3341728; // read this from localstorage or API

    let distance = this.getDistanceFromLatLonInKm(officeLat,officeLon,location.latitude,location.longitude);
    this.localNotifications.schedule({
      id: 1,
      text: 'You are '+distance+'mtr away',
      sound: !this.platform.is('ios')? 'file://sound.mp3': 'file://beep.caf',
      data: { data: distance }
    });
    if(distance > 500){ // 500meter away 
      this.localNotifications.schedule({
        id: 2,
        text: 'You are out of region',
        sound: !this.platform.is('ios')? 'file://sound.mp3': 'file://beep.caf',
        data: { data: distance }
      });
    } else {
      this.localNotifications.schedule({
        id: 2,
        text: 'You are inside region',
        sound: !this.platform.is('ios')? 'file://sound.mp3': 'file://beep.caf',
        data: { data: distance }
      });
    }
  }
  showExitConfirm() {
    this.alertController.create({
      header: this.confirm,
      message: this.exitMsg,
      backdropDismiss: false,
      buttons: [{
        text: this.stay,
        role: 'cancel',
        handler: () => {
          // console.log('Application exit prevented!');
        }
      }, {
        text: this.exit,
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    if(this.userID == undefined || this.userID == 'undefined' || this.userID == null || this.userID == 'null' || this.userID == ''){
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }else{
      this.router.navigateByUrl('/folder/tms/mytask');
    }
  }

  async logout(){
    this.storage.set('ion_did_login', false);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: this.confirm,
        message: this.exitMsg,
        buttons: [{
          text: this.exit,
          handler: () => {
            navigator['app'].exitApp();
            this.logOutApp();
           }
        }, {
          text: this.cancel,
          role: 'cancel'
        }]
      });
  
      await alert.present();
  }

  logOutApp(){
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('AtteType');
    window.localStorage.removeItem('empId');
    window.localStorage.removeItem('clientId');
    window.localStorage.removeItem('companyId');
    window.localStorage.removeItem('cid');
    window.localStorage.removeItem('subsidiaryId');
    window.localStorage.removeItem('loginDetails');
  }

  ngOnDestroy() { 
    // this.backButtonSubscription.unsubscribe();
  }
  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371;
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d*1000; // convert to meter
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }
}
