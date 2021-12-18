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
export class TmsService {
  token: string;
   constructor(private http: HttpClient, private storage: Storage) { }


//  getTaskList(userId){
//    return this.http.get(environment.url + 'task/getmytasks' + '?userid=' + userId, this.httpOptions)
//    .map(Response =>
//     {return Response}).catch(this.handleErrors);
//  }
 
 getTaskList(userId, startDate, endDate){
  return this.http.get(environment.urlPHP + 'task/getmytasks/' + userId+'/'+startDate+'/'+endDate)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
}

getMyTasksList(userId){
  return this.http.get(environment.urlPHP + 'task/getmytaskslist/' + userId)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
}

 taskDes(id){
  return this.http.get(environment.urlPHP + 'task/gettaskdetails/'+ id)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
}
taskLoc(id,status) {
  return this.http.get(environment.urlPHP + 'task/get_tasks/'+ id + '/'+ status)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
}

 updateTaskStatus(id, status){
  return this.http.get(environment.urlPHP + 'task/updatetaskstatus/' + id + '/'+ status)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
 }

 updateEndTaskStatus(id, status, dt){
  let payload = {
    "endTime": dt,
    "stage":status,
    "taskid":id
  }
  return this.http.post(environment.urlPHP + 'task/updateEndtaskstatus/',payload)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
 }

 lastTaskStatus(id){
  return this.http.get(environment.urlPHP + 'task/laststatus/'+ id)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
 }

 timeSpent(id){
  return this.http.get(environment.urlPHP + 'task/gettimespentintask/'+ id)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
 }

 getCompanies() {
  return this.http.get(environment.urlPHP + 'task/get_companies')
  .map(Response =>
   {return Response}).catch(this.handleErrors);
 }
 getTaskname() {
  return this.http.get(environment.urlPHP + 'task/checkTaskname')
  .map(Response =>
   {return Response}).catch(this.handleErrors);
 }

 getProject(id) {
  return this.http.get(environment.urlPHP + 'task/get_projects/' + id)
  .map(Response =>
   {return Response}).catch(this.handleErrors);

 }
 createTask(data) {
  return this.http.post(environment.urlPHP + 'task/create_task', data)
  .map(Response =>
   {return Response}).catch(this.handleErrors);
 }
 
  private handleErrors (error: Response | any) {
    console.log(error.error.message);
    return Observable.throw(error.error.message || 'backend server error');
  }
}