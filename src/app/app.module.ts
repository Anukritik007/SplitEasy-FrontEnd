import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {LoginSignupComponent} from './views/login-signup/login-signup.component';
import {WelcomePageComponent} from './views/welcome-page/welcome-page.component';
import { ContainerComponent } from './container/container.component';
// TODO: add views as a module
// import {ViewsModule} from './views/views.module';
// import {RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginSignupComponent,
    WelcomePageComponent,
    ContainerComponent
  ],
  imports: [
    // TODO: add views as a module
    // ViewsModule,
    // RouterModule,
    BrowserModule,
    ComponentsModule,
    CommonModule ,
    ReactiveFormsModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
