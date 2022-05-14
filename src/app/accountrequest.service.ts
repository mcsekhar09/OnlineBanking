import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accountrequest } from './model/accountrequest';

@Injectable({
  providedIn: 'root'
})
export class AccountrequestService {
  update(arg0: any, value: any) {
    throw new Error('Method not implemented.');
  }

  private apiServer= "http://localhost:26423/api/accountopen";
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
   Update(id:number, viewrequests:Accountrequest): Observable<Accountrequest> {
    return this.httpClient.put<Accountrequest>(this.apiServer + '/' + id, JSON.stringify(viewrequests), this.httpOptions)
   
  }


}
