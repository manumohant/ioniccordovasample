import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { AgmCoreModule } from '@agm/core';
import { CheckinComponent } from './check-incheck-out/checkin/checkin.component';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    AgmCoreModule,
    NgCalendarModule,
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
