import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  
  Admin : any={};    

  errorMessage!:string;    
  constructor(private router:Router,private Service:AdminloginService) { }

  ngOnInit(): void {
  }

login(){    
       
      this.Service.Login(this.Admin).subscribe(
      (res) => {  
        console.log("Success");
        sessionStorage.setItem('Adminid',this.Admin.Adminid)
        //this.Service.sendstatus(true);
        this.Service.subject.next(true);
        this.router.navigate(['viewrequests']);     
         console.log(res);
      },    
    
    );    
  };   
  adminlogout()
  {
    console.log("hi");
    sessionStorage.removeItem('username');
    sessionStorage.clear();
    this.Service.subject.next(false);
    //this.message=false;
    this.router.navigate(['adminlogin']); 
  }  


}
