import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   message:boolean=false;
  title:any
  adminmessage:boolean=false
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.service.recievedStatus().subscribe(
      (data)=>{
      this.message=data;//true
      });
  }
 logout()
  {
    console.log("hi");
    sessionStorage.removeItem('username');
    sessionStorage.clear();
    this.service.subject.next(false);
    //this.message=false;
    this.router.navigate(['userlogin']); 
  } 

  adminlogout()
  {
    console.log("hi");
    sessionStorage.removeItem('username');
    sessionStorage.clear();
    this.service.subject.next(false);
    //this.message=false;
    this.router.navigate(['adminlogin']); 
  } 
}
