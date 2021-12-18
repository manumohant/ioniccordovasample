import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTaskComponent } from './my-task/my-task.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';
import { TasklocationsComponent } from './tasklocations/tasklocations.component';
import { NewtaskComponent } from './newtask/newtask.component';


const routes: Routes = [
  {
    path: 'mytask',
    component: MyTaskComponent
  },
  {
    path: 'newtask',
    component: NewtaskComponent
  },
  {
    path: 'taskDes/:id',
    component: TaskDescriptionComponent
  },
  {
    path: 'taskloc/:status',
    component: TasklocationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TmsRoutingModule { }
