import { DisplayPage } from './../display/display';
import { JsonServiceProvider } from './../../providers/json-service/json-service';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courses:any;
  arrCourses=[];
   lessons:any;
   arrLesson=[];

  


  constructor(public navCtrl: NavController,private viewCtrl:ViewController,private service:JsonServiceProvider) {
      service.getCourses().subscribe(results=>{
        console.log("response",results)

        this.courses = results;

        this.arrCourses = this.courses.courses

        console.log("response",this.courses)


        this.lessons = results;

        this.arrLesson= this.lessons.lessons

        console.log("response",this.lessons)
        
      })  
  }

  getData(lessons:any){
    
      this.navCtrl.push(DisplayPage,{data:lessons});
     }
   
  

}
