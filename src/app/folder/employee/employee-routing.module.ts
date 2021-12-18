import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddavailabilityComponent } from './addavailability/addavailability.component';
import { AvailabilityComponent } from './availability/availability.component';


const routes: Routes = [
  {
    path:'',
    component: AvailabilityComponent
  },
  {
    path:'',
    component: AvailabilityComponent
  },
  {
    path:'addavail',
    component: AddavailabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
