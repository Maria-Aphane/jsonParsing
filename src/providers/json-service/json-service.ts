import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class JsonServiceProvider {


courses=[];


url="assets/codetribe.json";

  constructor(public http: HttpClient) {

    console.log('Hello JsonServiceProvider Provider');
  }

  

  getCourses()
  {
   return  this.http.get(this.url);
  }


 


}
