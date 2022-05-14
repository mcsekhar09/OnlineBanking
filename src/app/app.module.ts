import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenaccComponent } from './openacc/openacc.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ForgotidComponent } from './forgotid/forgotid.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BenificiaryComponent } from './benificiary/benificiary.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';


@NgModule({
  declarations: [
    AppComponent,
    OpenaccComponent,
    RegisterComponent,
    MainComponent,
    LoginComponent,
    ForgotidComponent,
    ForgotpassComponent,
    AdminLoginComponent,
    BenificiaryComponent,
    ViewrequestsComponent,
    RequestdetailsComponent,
    FundtransferComponent,
    PaymentpageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
