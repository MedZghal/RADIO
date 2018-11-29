import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RadioServiceProvider } from '../providers/radio-service/radio-service';
import {RadioSafxPageModule} from "../pages/radio-safx/radio-safx.module";
import {HttpClientModule} from "@angular/common/http";
import {VideoPlayer} from "@ionic-native/video-player";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {Media} from "@ionic-native/media";
import {RadioDetailPageModule} from "../pages/radio-detail/radio-detail.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RadioSafxPageModule,
    RadioDetailPageModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RadioServiceProvider,
    Media
  ]
})
export class AppModule {}
