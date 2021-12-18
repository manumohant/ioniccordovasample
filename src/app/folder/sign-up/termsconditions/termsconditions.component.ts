import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-termsconditions',
  templateUrl: './termsconditions.component.html',
  styleUrls: ['./termsconditions.component.scss'],
})
export class TermsconditionsComponent implements OnInit {

  terms:any;
  userId:any;
  showSpinner: boolean = false;
  errMsg: any;
  errTitle:any;
  tc:any;
  constructor(public alertController: AlertController, private router: Router, public loginSer: SignUpService,) {
    this.userId = window.localStorage.getItem('userId');
  }

  ngOnInit() {}

  termsAccepted(){
    this.terms=1;
    this.loginSer.termsConditions(this.userId, this.terms).subscribe(res=>{
      if(res['data'] == 1){
        window.localStorage.setItem('terms', '1');
      }
    },
    error => {
      this.showSpinner = false;
      this.errTitle='Error!';
      this.errMsg=(error);
      this.showAlert(this.errTitle, this.errMsg);
    });
    this.router.navigateByUrl('/folder/tms/mytask');
  }

  async showAlert(title, msg) {
    const alert = await this.alertController.create({
      cssClass: 'alertDanger',
      header: title,
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
    await alert.onDidDismiss(); 
  }
}