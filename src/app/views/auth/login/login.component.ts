import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/[\w]+@[\w]+\.[a-zA-Z]+/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  public onSubmit(form: FormGroup) {
    console.log('LoginComponent:Entering onSubmit');
    const userEmail = form.value.email;
    const userPassword = form.value.password;
    console.log('User with id :', userEmail, 'is trying to login with password:', userPassword);
    
    if(userEmail === "anik@gmail.com" && userPassword === "P@ssw0rd"){
      this.router.navigate(['/landing']);
    }
  }

}
