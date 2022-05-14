import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BenifiaciaryaryService } from '../benifiaciaryary.service';

@Component({
  selector: 'app-benificiary',
  templateUrl: './benificiary.component.html',
  styleUrls: ['./benificiary.component.css']
})
export class BenificiaryComponent implements OnInit {
  data = false;    
      
  message!:string;    
  addpayeeForm:any;

  constructor(private formbulider: FormBuilder,private router: Router,private loginService:BenifiaciaryaryService) { }
  ngOnInit(): void {

    this.addpayeeForm=new FormGroup({
      Beneficiaryname:new FormControl('',[Validators.required]),
      CustomerId:new FormControl('',[Validators.required]),
      BeneficiaryAccNo:new FormControl('',[Validators.required]),
      Nickname:new FormControl(''),
      IfscCode:new FormControl('',[Validators.required])
   
    })
  }
 /*  get beneficiaryname() {
    return this.addpayeeForm.get('beneficiaryname')
  }
  get beneficiaryaccountnumber() {
    return this.addpayeeForm.get('beneficiaryaccountnumber')
  }
  get Reenteraccountnumber() {
    return this.addpayeeForm.get('Reenteraccountnumber')
  }
  get IFSCCode() {
    return this.addpayeeForm.get('IFSCCode')
  } */

  AddBenificiary()    
  {   
    this.addpayeeForm.value.CustomerId =2345;
    console.log(this.addpayeeForm.value)
  this.loginService.Register(this.addpayeeForm.value).subscribe(    
    (data)=>    
    {    
      console.log(data);
       
      this.addpayeeForm.reset();    
      this.message="Add Benificiary Successfully"
      //this.router.navigateByUrl('Login')
    },
    );    
  }     
}
