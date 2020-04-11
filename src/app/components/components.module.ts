import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [ActivityComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
