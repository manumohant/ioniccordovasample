import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Observable';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CheckIncheckOutService {
  token: string;
  httpOptions: { headers: HttpHeaders; };
  public photos: Photo[] = [];

   constructor(private http: HttpClient,
    private storage: Storage,
    private camera: Camera,
    ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + <string>window.localStorage.getItem('token')
      })
    };
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });

      // Save all photos for later viewing
      this.storage.set('photos', this.photos);
    }, (err) => {
     // Handle error
     console.log("Gallery issue: " + err);
    });

  }

  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

  sendStatus(data){
    return this.http.post(environment.url + 'attendance/checkinoutattendance', data, this.httpOptions)
    .map(Response =>
      {return Response}).catch(this.handleErrors);
  }

 checkInOutStatus(userId){
   return this.http.get(environment.url + 'attendance/getattendancestatus' + '?userid=' + userId, this.httpOptions)
   .map(Response =>
    {return Response}).catch(this.handleErrors);
 }

 tmsCheckIn(data){
  return this.http.post(environment.urlPHP + 'attendance/checkinouttask', data, this.httpOptions)
  .map(Response =>
    {console.log(Response); return Response}).catch(this.handleErrors);
 }
 
  private handleErrors (error: Response | any) {
    return Observable.throw(error.error.message || 'backend server error');
  }
}

class Photo {
  data: any;
}