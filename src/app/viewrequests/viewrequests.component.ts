import { Component, OnInit } from '@angular/core';
import { AccountrequestService } from '../accountrequest.service';
import { Accountrequest } from '../model/accountrequest';

@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.css']
})
export class ViewrequestsComponent implements OnInit {

  
  viewrequests!:Accountrequest[]
  constructor(public viewrequestsservice:AccountrequestService) { 
    viewrequestsservice.GetAll().subscribe((data)=>{
      this.viewrequests=data;
      console.log(data);
     });
    }
  ngOnInit(): void {
    
  }
}

