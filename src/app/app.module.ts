import { DisplayPage } from './../pages/display/display';
import { JsonServiceProvider } from './../providers/json-service/json-service';
import { BrowserModule} from '@angular/platform-browser';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '../../node_modules/@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisplayPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonServiceProvider
  ]
})
export class AppModule {}
