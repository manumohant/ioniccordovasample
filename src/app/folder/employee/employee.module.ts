import { NgModule, LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AvailabilityComponent } from './availability/availability.component';
import { AddavailabilityComponent } from './addavailability/addavailability.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgCalendarModule } from 'ionic2-calendar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
// import localezh from '@angular/common/locales/zh-Hans';

// registerLocaleData(localezh);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [AvailabilityComponent, AddavailabilityComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    IonicModule,
    FormsModule,
    NgCalendarModule,
    EmployeeRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'zh-Hans' }
  ]
})
export class EmployeeModule { }
