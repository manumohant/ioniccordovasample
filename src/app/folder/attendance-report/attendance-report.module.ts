import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceReportRoutingModule } from './attendance-report-routing.module';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localezh from '@angular/common/locales/zh-Hans';

registerLocaleData(localezh);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [GenerateReportComponent],
  imports: [
    CommonModule,
    AttendanceReportRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-Hans' }
  ]
})
export class AttendanceReportModule { }
