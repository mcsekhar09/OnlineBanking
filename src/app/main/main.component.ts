import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountopenService } from '../Models/accountopen.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  message:boolean=false;

  constructor(private service:AccountopenService,private router:Router) { }

  ngOnInit(): void {
    this.service.recievedStatus().subscribe((data)=>{
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
    this.router.navigate(['Login']); 
  } 
}
