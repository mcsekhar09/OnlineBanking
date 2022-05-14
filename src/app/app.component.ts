import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountopenService } from './Models/accountopen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectbank';
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
