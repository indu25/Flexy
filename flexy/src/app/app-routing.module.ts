import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { ClassNextComponent } from './class-next/class-next.component';
import { ClassPreviousComponent } from './class-previous/class-previous.component';
const routes: Routes = [
  {
    path: 'class/schedule',
    component: ClassScheduleComponent
  },
  {
    path: 'class/next',
    component: ClassNextComponent
  },
  {
    path: 'class/previous',
    component: ClassPreviousComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
