import { Component, OnInit } from '@angular/core';
import {NgForm, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountopenService } from '../Models/accountopen.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-openacc',
  templateUrl: './openacc.component.html',
  styleUrls: ['./openacc.component.css']
})


export class OpenaccComponent implements OnInit {

  data = false;    
     
  message!:string;    
  accountopenForm:any;
  

  
  constructor(private formbulider: FormBuilder,private router: Router,private loginService:AccountopenService) { }

  ngOnInit(): void {
    this.accountopenForm = new FormGroup({
      Title: new FormControl('',[Validators.required]),
      FirstName: new FormControl('',[Validators.required]),
      MiddleName: new FormControl(),
      Lastname: new FormControl('',[Validators.required]),
      FatherName: new FormControl('',[Validators.required]),
      EmailId: new FormControl('',[Validators.email,Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      MobileNum: new FormControl('',[Validators.required,Validators.pattern("[6789][0-9]{9}")]),
      AddharCard: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{4}?[0-9]{4}?[0-9]{4}$")]),
      Dob: new FormControl('',[Validators.required]),
      ResidentialAddress: new FormControl('',[Validators.required]),
      PermenentAddress: new FormControl('',[Validators.required]),
      OccupationalDetails: new FormControl('',[Validators.required]),
      GrossAnnualIncome: new FormControl('',[Validators.required])
    });  
   }
  
  /* get title() {
    return this.accountopenForm.get('title')
  }
  get firstname() {
    return this.accountopenForm.get('firstname');
  }
  get lastname() {
    return this.accountopenForm.get('lastname');
  }
  get email() {
    return this.accountopenForm.get('email');
  }
  get mobileno() {
    return this.accountopenForm.get('mobileno');
  }
  get AadharCard() {
    return this.accountopenForm.get('AadharCard');
  }
  get dateofbirth() {
    return this.accountopenForm.get('dateofbirth');
  }
  get residentialAddress() {
    return this.accountopenForm.get('residentialAddress');
  }
  get permanentAddress() {
    return this.accountopenForm.get('permanentAddress');
  }
  get sourceofincome() {
    return this.accountopenForm.get('sourceofincome')
  }
  get grosssalary() {
    return this.accountopenForm.get('grosssalary')
  }
  onSubmit() {
    console.log(this.accountopenForm.value);
  } */
  RegisterUser()    
  {    
    this.accountopenForm.value.Status="Pending";
    console.log(this.accountopenForm.value)
  this.loginService.OpenAccount(this.accountopenForm.value).subscribe(    
    (data)=>    
    {    
      console.log(data);
       
      this.accountopenForm.reset();    
      this.message="Request for Account Open Sent Successfully"
      this.router.navigateByUrl('userlogin')
    },
    );    
  }    

}
  
   
