import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckIncheckOutRoutingModule } from './check-incheck-out-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core'; 

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CheckinComponent } from './checkin/checkin.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [CheckinComponent],
  imports: [
    CommonModule,
    CheckIncheckOutRoutingModule,
    IonicModule,
    FormsModule,
    AgmCoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
  // exports: [
  //   TranslateModule 
  // ]
})
export class CheckIncheckOutModule { }
