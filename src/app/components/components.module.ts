import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ActivityComponent, DashboardComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]  //export the component which needs to be used outside this module
})
export class ComponentsModule { }
