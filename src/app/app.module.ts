import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './views/auth/login/login.component';
import {SignupComponent} from './views/auth/signup/signup.component';
import {WelcomePageComponent} from './views/welcome-page/welcome-page.component';
import { ContainerComponent } from './container/container.component';
// TODO: add views as a module
// import {ViewsModule} from './views/views.module';
// import {RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
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
