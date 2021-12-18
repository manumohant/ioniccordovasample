import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  userId:any;
  emprecnum:any;

  httpOptions: { headers: HttpHeaders; };

   constructor(private http: HttpClient,
    private storage: Storage,
    ) {
      this.userId=window.localStorage.getItem('userId');
      this.emprecnum=window.localStorage.getItem('user2employee');
  }
  
  getCustomer(){
    return this.http.get(environment.urlPHP + 'employee/customer/'+this.userId)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }

  getCustLocation(customer_recnum){
    return this.http.get(environment.urlPHP + 'employee/location/'+this.userId+'/'+customer_recnum)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }
  getCustSkills(){
    return this.http.get(environment.urlPHP + 'employee/skills/'+this.userId+'/'+this.emprecnum)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }
  getCategories(){
    return this.http.get(environment.urlPHP + 'employee/categorys/'+this.userId)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }
  getAllocations(){
    return this.http.get(environment.urlPHP + 'srs/getAllocationlist4user/'+this.userId+'/'+this.emprecnum)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }
  deAllocateEmp(data){
    return this.http.post(environment.urlPHP + 'srs/Deallocate', data)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }
  getEmpAvailability(){
    return this.http.get(environment.urlPHP + 'employee/EmpUnavailSummary/'+this.userId+'/'+this.emprecnum)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }
  addAvailabilty(data){
    return this.http.post(environment.urlPHP + 'employee/insertEmpunAvailtoleave', data)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }

  updateAvailabilty(leaveid){
    return this.http.get(environment.urlPHP + 'employee/updateUnavailEmp/'+this.userId+'/'+leaveid)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }

  private handleErrors (error: Response | any) {
    console.log(error.error.message)
    return Observable.throw(error.error.message || 'backend server error');
  }
}
