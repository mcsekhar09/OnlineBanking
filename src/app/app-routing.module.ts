import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BenificiaryComponent } from './benificiary/benificiary.component';
import { DashComponent } from './dash/dash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotidComponent } from './forgotid/forgotid.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { OpenaccComponent } from './openacc/openacc.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { RegisterComponent } from './register/register.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';


const routes: Routes = [
  { path: 'openacc', component: OpenaccComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userlogin', component: LoginComponent },
  {path: 'forgotid', component: ForgotidComponent},
  {path: 'forgotpass', component: ForgotpassComponent},
  {path: 'main', component: MainComponent},
  {path: 'dash', component: DashComponent},
  { path: 'benificiary', component: BenificiaryComponent },
  { path: 'requestdetails/:requestId', component: RequestdetailsComponent } ,
  { path: 'viewrequests', component: ViewrequestsComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'fundtransfer', component: FundtransferComponent },
  { path: 'paymentpage', component: PaymentpageComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
