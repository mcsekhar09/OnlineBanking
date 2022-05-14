import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    UserId: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required]),
})

  constructor() { }

  ngOnInit(): void {
  }

  get UserId() {
    return this.LoginForm.get('UserId');
  }

  get Password() {
    return this.LoginForm.get('Password');
  }

  onSubmit() {
    console.log(this.LoginForm.value);      
  }

}
