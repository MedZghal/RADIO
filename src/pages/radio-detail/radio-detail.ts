import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the RadioDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio-detail',
  templateUrl: 'radio-detail.html',
})
export class RadioDetailPage {

  URL = '';
  img = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    let data =this.navParams.get("Data");
    this.URL = data.videoUrl;
    this.img = data.img;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioDetailPage');
    console.log(this.navParams.get("Data"));
  }

}
