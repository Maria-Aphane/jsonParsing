import { JsonServiceProvider } from './../../providers/json-service/json-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  course:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,private service:JsonServiceProvider) {

     this.course = this.navParams.get('data');

}


  ionViewDidLoad() {


    console.log('ionViewDidLoad DisplayPage');
  }



  
  close(){
    this.viewCtrl.dismiss();
  }

  getData(){

    this.service.getCourses().subscribe(data=>{
      
    })
     
   }


  
}
