import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Benificiary } from './benificiary';

@Injectable({
  providedIn: 'root'
})
export class BenifiaciaryaryService {
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

      this.Url='http://localhost:26423/api/benifiaciary'
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      
      const headerSettings: {[name: string]: string | string[]; } = {};  
      this.header = new HttpHeaders(headerSettings);  
    }  
    recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
  /* Login(model : any){        
    return this.http.post<any>(this.Url+'/UserLogin',JSON.stringify(model),this.httpOptions );  
  }   */
   /* CreateUser(register:Register)  
   {  
    return this.http.post<Register[]>(this.Url + '/createcontact/', register, this.httpOptions)  
   }   */
  Register(register:Benificiary)  
   {      
    return this.http.post<Benificiary>(this.Url ,JSON.stringify(register), this.httpOptions)  
   } 
}
