import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveSummaryComponent } from './leave-summary/leave-summary.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCalendarModule } from 'ionic2-calendar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
// import localeZh from '@angular/common/locales/zh-Hans';

// registerLocaleData(localeZh);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [LeaveSummaryComponent],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgCalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    // { 
      // provide: LOCALE_ID, 
      // useValue: 'zh-Hans' 
    // }
  ]
})
export class LeaveModule { }
