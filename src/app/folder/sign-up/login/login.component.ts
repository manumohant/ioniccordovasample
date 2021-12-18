import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  name: any;
  pass: any;
  showSpinner: boolean = false;
  errMsg: any;
  // UniqueDeviceID:string;
  uniqueID:any;

  lang:any;
  locStorageLang:any;

  permGrant:any;
  loginFailed:any;
  invalidCred:any;

  constructor(private router: Router,
              public loginSer: SignUpService,
              private storage: Storage,
              private nativeStorage: NativeStorage,
              private uniqueDeviceID: UniqueDeviceID,
              private uid: Uid,
              private androidPermissions: AndroidPermissions,
              public translate: TranslateService
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

      this.translate.get('Permission granted').subscribe(value => { this.permGrant = value; });
      this.translate.get('Login failed').subscribe(value => { this.loginFailed = value; });
      this.translate.get('Invalid credentials').subscribe(value => { this.invalidCred = value; });
      //Check Permission on App Start
      this.getPermission();
    }
 
    getID_UID(type){
      return this.uid.UUID;
    }

    getPermission(){
      this.androidPermissions.checkPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      ).then(res => {
        if(res.hasPermission){
          this.uniqueID = this.getID_UID("UUID");   
        }else{
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
            if(res.hasPermission){
              alert(this.permGrant);
            }
          }).catch(error => {
            alert("Error! "+error);
          });
        }
      }).catch(error => {
        alert("Error! "+error);
      });
    }

  ngOnInit() {
  }

  login(){
    this.showSpinner = true;
    let loginData = { 
                      UserName:this.name,
                      Password:this.pass,
                      UUID:this.uniqueID
                    }
    this.loginSer.login(loginData).subscribe(res=>{
      if(res['data']){
      this.showSpinner = false;
      }
      this.storage.set('ion_did_login', false);
      window.localStorage.setItem('loginDetails', res['data']);
      window.localStorage.setItem('userId', res['data'].userid);
      window.localStorage.setItem('AtteType',res['data'].type);
      window.localStorage.setItem('empId',res['data'].user2employee);
      window.localStorage.setItem('siteId',res['data'].siteid);
      window.localStorage.setItem('user2employee',res['data'].user2employee);
      window.localStorage.setItem('name', res['data'].fname);
      window.localStorage.setItem('companyId',res['data'].employee2company);
      window.localStorage.setItem('dept',res['data'].dept);
      window.localStorage.setItem('token', res['data'].token);
      window.localStorage.setItem('terms', res['data'].tcflag);
      
      if(res['data']=='Login failed'){
        this.errMsg = this.loginFailed;
        this.showSpinner = false;
      } else if((res['data'].userid !=undefined || res['data'].userid != null || res['data'].userid != 'undefined' || res['data'].userid != 'null' || res['data'].userid !='') && (window.localStorage.getItem('AtteType') == 'TMS')){
        if(res['data'].tcflag == 1){
          this.router.navigateByUrl('/folder/tms/mytask');
        }
        else{
          this.router.navigateByUrl('/folder/signUp/terms');
        }
      }else{ 
        this.errMsg = this.invalidCred;
        this.showSpinner = false;
      }
    },
    error => {
      this.showSpinner = false;
      this.errMsg = (error.error.data);
    });
    
  }
 
  register(){
    this.router.navigate(['/folder/signUp/register']);
  }
}
