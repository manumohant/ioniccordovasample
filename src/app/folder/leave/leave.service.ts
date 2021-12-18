import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  token: string;
  userId:any;
  emprecnum:any;
  httpOptions: { headers: HttpHeaders; };

   constructor(private http: HttpClient,
    private storage: Storage,
    ) {
      this.userId=window.localStorage.getItem('userId');
      this.emprecnum=window.localStorage.getItem('user2employee');
  }


 leaveSummary(userId){
   return this.http.get(environment.url + 'attendance/getmyleaverequests' + '?userid=' + userId, this.httpOptions)
   .map(Response =>
    {return Response}).catch(this.handleErrors);
 }

 applyLeave(data){
  return this.http.post(environment.urlPHP + 'attendance/applyleave', data, this.httpOptions)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
 }
 updateLeave(leaveid){
  return this.http.get(environment.urlPHP + 'employee/updateLeave/' + this.userId +'/' + leaveid, this.httpOptions)
  .map(Response =>
    {return Response}).catch(this.handleErrors);

 }

 leaves(empId, firstDay, lastDay){
  return this.http.get(environment.urlPHP + 'attendance/get_leaves/' + empId +'/' + firstDay+ '/'+lastDay, this.httpOptions)
  .map(Response =>
    {return Response}).catch(this.handleErrors);
 }
 

  private handleErrors (error: Response | any) {
    console.log(error.error.message)
    return Observable.throw(error.error.message || 'backend server error');
  }
}

