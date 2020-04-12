import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name:new FormControl(),
      email: new FormControl('', [Validators.required, Validators.pattern(/[\w\.]+@[\w]+\.[a-zA-Z]+/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      phoneNumber:new FormControl('', [Validators.required, Validators.minLength(10)]), //TODO:make exact 10 digit
      currency:new FormControl()

    });
  }

  public onSubmit(form: FormGroup) {
    console.log('SignupComponent:Entering onSubmit');
    console.log('Form submitted:',form);
  }
}
