import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FundtransferService } from '../fundtransfer.service';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {
 

  constructor(private formbulider: FormBuilder,private router: Router,private fundService:FundtransferService) { }

  ngOnInit(): void {
  }
  OnSubmit()
  {
    this.router.navigateByUrl('/fundtransfer')
  }
}
