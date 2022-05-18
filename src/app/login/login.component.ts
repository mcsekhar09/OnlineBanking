import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:boolean=false;
  title:any

  userlogin : any={};    

  errorMessage!:string;    
  constructor(private router:Router,private Service: LoginService) { }

  ngOnInit(): void {
  }

login(){    
       
      this.Service.Login(this.userlogin).subscribe(
      (res) => {  
        console.log("Success");
        sessionStorage.setItem('CustomerId',this.userlogin.CustomerId)
        //this.Service.sendstatus(true);
        this.Service.subject.next(true);
        this.router.navigate(['dashboards']);     
         console.log(res);
      },
          
    );    
  };    

  logout()
  {
    console.log("hi");
    sessionStorage.removeItem('username');
    sessionStorage.clear();
    this.Service.subject.next(false);
    //this.message=false;
    this.router.navigate(['userlogin']); 
  } 
}
