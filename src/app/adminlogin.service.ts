import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Adminlogin } from './adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  Adminlogin(value: any) {
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

      this.Url='http://localhost:26423/api/admin';
      //this.Url='http://localhost:26423/api/user';
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      
      const headerSettings: {[name: string]: string | string[]; } = {};  
      this.header = new HttpHeaders(headerSettings);  
    }  
    recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
  Login(login : any){        
    return this.http.post<any>(this.Url+'/',JSON.stringify(login),this.httpOptions );  
  } 
  /* update(id:number, details:Adminlogin): Observable<Adminlogin> {
    return this.http.put<Adminlogin>(this.Url + '/' + id, JSON.stringify(details), this.httpOptions)
   
  }  */
   /* CreateUser(register:Register)  
   {  
    return this.http.post<Register[]>(this.Url + '/createcontact/', register, this.httpOptions)  
   }   */
  /* Register(register:Adminlogin)  
   {      
    return this.http.post<Adminlogin>(this.Url ,JSON.stringify(register), this.httpOptions)  
   }  */
}
