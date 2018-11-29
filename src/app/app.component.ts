import { Component, ViewChild } from '@angular/core';
import {Nav, Platform, Events, LoadingController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Media, MediaObject} from '@ionic-native/media';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {RadioSafxPage} from "../pages/radio-safx/radio-safx";
import { Storage } from '@ionic/storage';
import {RadioServiceProvider} from "../providers/radio-service/radio-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  file :MediaObject  = null;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  loading: any;

  constructor(private player : RadioServiceProvider, public loadingCtrl: LoadingController, private storage: Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public events: Events,private media: Media) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Radio', component: RadioSafxPage }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.playEvents();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  playEvents(){


    // const file :MediaObject  = this.media.create('rtmp://196.203.16.78:1936/rliveedge/streamsfa/;stream.mp3');
    // const file :MediaObject  = this.media.create('http://109.168.100.173:8058/;stream.mp3');


    this.events.subscribe('play', (userId, attrs) => {
      // console.log(attrs);
      // this.file =this.media.create(attrs.value.url);
      // this.file.play();
      // console.log('PLAY')
      this.loading = this.presentLoadingDefault();
      this.loading.present().then(()=>{
        this.player.playSTR(attrs.value.url).then(() => {
          this.loading.dismiss();
          console.log('Playing');
        });
      });

      this.storage.set('button', 'play');

    });

    this.events.subscribe('pause', (userId, attrs) => {
      // console.log(attrs);
      // this.file.pause();
      // // user and time are the same arguments passed in `events.publish(user, time)`
      // console.log('PAUSE')
      this.player.pauseSTR();
      this.storage.set('button', 'stop');
      console.log('STOP')

    });

    this.events.subscribe('stop', (userId, attrs) => {
      console.log(attrs);
      this.file.stop();
      this.file.release();
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('STOP')
    });
  }

  presentLoadingDefault() {
    return this.loadingCtrl.create({
      content: 'Connecté...'
    });

  }
}
