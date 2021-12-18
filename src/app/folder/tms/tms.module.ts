import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmsRoutingModule } from './tms-routing.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyTaskComponent } from './my-task/my-task.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasklocationsComponent } from './tasklocations/tasklocations.component';
import { AgmCoreModule } from '@agm/core';
import { NewtaskComponent } from './newtask/newtask.component';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [MyTaskComponent, TaskDescriptionComponent, TasklocationsComponent, NewtaskComponent],
  imports: [
    CommonModule,
    TmsRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
})
export class TmsModule { }