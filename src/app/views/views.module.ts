import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginSignupComponent],
  imports: [
    CommonModule , ReactiveFormsModule
  ],
  exports: [LoginSignupComponent]
})
export class ViewsModule { }
