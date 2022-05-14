import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Fundtransfer } from './fundtransfer';

@Injectable({
  providedIn: 'root'
})
export class FundtransferService {
  Benificiary(value: any) {
    throw new Error('Method not implemented.');
  }

  public subject=new Subject<boolean>();
  Url!:string;  
  token!: string;  
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}

    constructor(private http:HttpClient) {   

      this.Url='http://localhost:26423/api/transaction'
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      
      const headerSettings: {[name: string]: string | string[]; } = {};  
      this.header = new HttpHeaders(headerSettings);  
    }  
    recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }

  CreateUser(fundtransfer:Fundtransfer)  
   {  
    return this.http.post<Fundtransfer[]>(this.Url + '/', fundtransfer, this.httpOptions)  
   }
}
