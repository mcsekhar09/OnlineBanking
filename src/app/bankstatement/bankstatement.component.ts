import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountrequestService } from '../accountrequest.service';
import { Bankstatement } from '../bankstatement';

@Component({
  selector: 'app-bankstatement',
  templateUrl: './bankstatement.component.html',
  styleUrls: ['./bankstatement.component.css']
})
export class BankstatementComponent implements OnInit {
  transaction!:any[]
  bankstatementForm=new FormGroup({
    AccountNum:new FormControl(''),
    Fromdate:new FormControl(''),
   todate:new FormControl(''),
   
  })
  bankstatement!:Bankstatement[]
  constructor(public service:AccountrequestService) { 
    
  }

  ngOnInit(): void {

  }
  Search()
  {
    this.service.getByAccountNum(this.bankstatementForm.value.AccountNum,this.bankstatementForm.value.Fromdate,this.bankstatementForm.value.todate).subscribe((res)=>{
      console.log(res);
      this.transaction=res;
    })
  }
}
