import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = {}
 /*  LoginForm = new FormGroup({
    CustomerId: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required]),
}) */

constructor(private router:Router,private loginService:AdminloginService) { }

  ngOnInit(): void {
  }

  /* get UserId() {
    return this.LoginForm.get('UserId');
  }

  get Password() {
    return this.LoginForm.get('Password');
  } */

  
  login(){    
       
    this.loginService.Login(this.user).subscribe(
    (res) => {  
      console.log("Success");
      sessionStorage.setItem('CustomerId',this.user.CustomerId)
      //this.Service.sendstatus(true);
      this.loginService.subject.next(true);
      this.router.navigate(['adminlogin']);     
       console.log(res);
    },    
  
  );    
};  
}
