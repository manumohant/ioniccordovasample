import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SignUpService } from '../sign-up.service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  empid: any;
  siteid:any;
  userid:any;
  pass: any;
  confirm_pass:any;
  idproof:any;
  uniqueID:any;
  showSpinner: boolean = false;
  errMsg: any;

  lang:any;
  locStorageLang:any;

  // Translate
  permGrant:any;
  userExist:any;
  uuidExist:any;
  empExist:any;
  pwdMismatch:any;

  constructor(private router: Router,
    public loginSer: SignUpService,
    private storage: Storage,
    private nativeStorage: NativeStorage,
    private uniqueDeviceID: UniqueDeviceID,
    private uid: Uid,
    private androidPermissions: AndroidPermissions,
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

      this.translate.get('Permission granted').subscribe(value => { this.permGrant = value; });
      this.translate.get('User exists').subscribe(value => { this.userExist = value; });
      this.translate.get('UUID exists').subscribe(value => { this.uuidExist = value; });
      this.translate.get('Employee exists').subscribe(value => { this.empExist = value; });
      this.translate.get('Password mismatch').subscribe(value => { this.pwdMismatch = value; });
      
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

  ngOnInit() {}

  arrow(){
    this.router.navigate(['/folder/signUp/login']);
  }
  register(){
    this.showSpinner = true;
    if(this.uniqueID == '' || this.uniqueID == null){
      this.getPermission();
    } else if (this.pass == this.confirm_pass){
      let registerData = { 
        EmpID:this.empid,
        SiteID:this.siteid,
        UserName:this.userid,
        Password:this.pass,
        AtteType:'TMS',
        UniqueID:this.uniqueID
      }
      this.loginSer.register(registerData).subscribe(res=>{
        if(res['data'] == "User exists"){
        this.errMsg = this.userExist;
        this.showSpinner = false;
        }else if(res['data'] == "UUID exists"){
          this.errMsg = this.uuidExist;
          this.showSpinner = false;
        }else if(res['data'] == "Employee doesn't exist"){
          this.errMsg = this.empExist;
          this.showSpinner = false;
        }else if(res['data'] == "User Registration Successful"){
          this.router.navigateByUrl('/folder/signUp/login');
        }
      },
      error => {
        this.showSpinner = false;
        this.errMsg = (error.error.data);
      });
    }else{
      this.errMsg= this.pwdMismatch;
    }
  }
}