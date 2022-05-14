import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccountrequestService } from '../accountrequest.service';

@Component({
  selector: 'app-requestdetails',
  templateUrl: './requestdetails.component.html',
  styleUrls: ['./requestdetails.component.css']
})
export class RequestdetailsComponent implements OnInit {

  viewrequestForm = new FormGroup({
    requestId: new FormControl(),
    title: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(),
    lastname: new FormControl(''),
    fatherName: new FormControl(''),
    emailId: new FormControl(''),
    mobileNum: new FormControl(''),
    addharCard: new FormControl(''),
    dob: new FormControl(''),
    residentialAddress: new FormControl(''),
    permenentAddress: new FormControl(''),
    occupationalDetails: new FormControl(''),
    grossAnnualIncome: new FormControl(''),
    status: new FormControl('')
  });  
  constructor(private viewrequestsservice:AccountrequestService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params['requestId'])
    this.viewrequestsservice.getById(this.router.snapshot.params['requestId']).subscribe((data)=> {
    console.log(data)
      this.viewrequestForm = new FormGroup({
      requestId: new FormControl(data["requestId"]),
      title:new FormControl(data["title"]),
      firstName: new FormControl(data["firstName"]),
      middleName:new FormControl(data["middleName"]),
      lastname: new FormControl(data["lastname"]),
      fatherName: new FormControl(data["fatherName"]),
      emailId: new FormControl(data["emailId"]),
      mobileNum: new FormControl(data["mobileNum"]),
      addharCard: new FormControl(data["addharCard"]),
      dob: new FormControl(data["dob"]),
      residentialAddress: new FormControl(data["residentialAddress"]),
      permenentAddress: new FormControl(data["permenentAddress"]),
      occupationalDetails: new FormControl(data["occupationalDetails"]),
      grossAnnualIncome: new FormControl(data["grossAnnualIncome"]),
      status: new FormControl(data["status"])
    })
  }
    )  
  }

  submitForm(){
    this.viewrequestsservice.Update(this.router.snapshot.params['requestId'],this.viewrequestForm.value).subscribe((data)=>
    console.log(data,"Approved")
    
  )
  this.route.navigateByUrl('/viewrequests')
  }

}
