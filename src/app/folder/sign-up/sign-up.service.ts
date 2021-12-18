import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
   constructor(private http: HttpClient) { }


  login(data:any){
    return this.http.post(environment.urlPHP + 'auth/login', data)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }

  termsConditions(userId, terms){
    return this.http.get(environment.urlPHP + 'auth/updateTc/'+userId+'/'+terms)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }

  register(data:any){
    return this.http.post(environment.urlPHP + 'auth/register', data)
    .map(Response =>
      {return Response}).catch(this.handleErrors);

  }

  private handleErrors (error: Response | any) {
    console.log(error.error.message)
    return Observable.throw(error.error.message || 'backend server error');
  }
}


