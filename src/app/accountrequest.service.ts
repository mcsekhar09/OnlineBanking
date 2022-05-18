import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bankstatement } from './bankstatement';
import { Accountrequest } from './model/accountrequest';

@Injectable({
  providedIn: 'root'
})
export class AccountrequestService {
  update(arg0: any, value: any) {
    throw new Error('Method not implemented.');
  }

  private apiServer= "http://localhost:26423/api/accountopen";
  private apiServer1 = "http://localhost:26423/api/user";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  GetAll():Observable<Accountrequest[]>
  {
    return this.httpClient.get<Accountrequest[]>(this.apiServer);
  }
  getById(id:number): Observable<Accountrequest> {
    return this.httpClient.get<Accountrequest>(this.apiServer + '/' + id)
   
  }
  //http://localhost:26423/api/user?AccountNum=23456&fromdate=2022-05-14&todate=2022-05-16
  getByAccountNum(AccountNum:number,fromdate:any,todate:any): Observable<any> {
    return this.httpClient.get<any>(this.apiServer1 + '?AccountNum=' + AccountNum + '&fromdate=' + fromdate + '&todate=' + todate)
   
  }
   Update(id:number, viewrequests:Accountrequest): Observable<Accountrequest> {
    return this.httpClient.put<Accountrequest>(this.apiServer + '/' + id, JSON.stringify(viewrequests), this.httpOptions)
   
  }


}
