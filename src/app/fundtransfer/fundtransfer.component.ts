import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FundtransferService } from '../fundtransfer.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {

  message:boolean=false;
  fundtransferForm=new FormGroup({
    fromAcc:new FormControl(''),
    toAcc:new FormControl(''),
    IFSCCode:new FormControl(''),
    transactionType:new FormControl(''),
    Remark:new FormControl(''),
    transactionDate:new FormControl(''),
    customerId:new FormControl('')
 
 })
 constructor(private Service:LoginService,private formbulider: FormBuilder,private router: Router,private createService:FundtransferService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.fundtransferForm.value);   
    this.createService.CreateUser(this.fundtransferForm!.value).subscribe((data: any) => {
      console.log(data);
     this.router.navigateByUrl('/paymentpage')
    });   
  }
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
