import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

      //this.Url='http://localhost:26423/api/admin';
      
      this.Url='http://localhost:5000/api/user';
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
}
