import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  public loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      //TODO:fix regex issue
      email: new FormControl('', [Validators.required, Validators.pattern('[\w\.]+@[\w]+\.[a-zA-Z]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  public onSubmit(form: FormGroup) {
    console.log('LoginSignupComponent:Entering onSubmit');
    const userEmail = form.value.email;
    const userPassword = form.value.password;
    console.log('User with id :', userEmail, 'is trying to login with password:', userPassword);
  }

}
