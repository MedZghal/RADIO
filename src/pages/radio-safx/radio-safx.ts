import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {RadioServiceProvider} from "../../providers/radio-service/radio-service";
import { VideoPlayer ,VideoOptions } from '@ionic-native/video-player';
import {trigger,state, style, animate, transition} from "@angular/animations";
import {RadioDetailPage} from "../radio-detail/radio-detail";
/**
 * Generated class for the RadioSafxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio-safx',
  templateUrl: 'radio-safx.html',
  animations: [
    trigger('shift', [
      state('previous', style({
        opacity: 0,
        transform: 'translateX(-100%)',
        '-webkit-transform' :'-webkit-translateX(-100%)'
      })),
      state('current', style({
        opacity: 1,
        transform: 'translateX(0%)',
        '-webkit-transform' :'-webkit-translateX(0%)'
      })),
      state('next', style({
        opacity: 0,
        transform: 'translateX(100%)',
        '-webkit-transform' :'-webkit-translateX(100%)'
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class RadioSafxPage {

  video_link :any ='';
  RTN=[
    {
      url:'http://rtstream.tanitweb.com/sfax',
      videoUrl:'',
      title:'Radio Sfax إذاعة صفاقس',
      descp:'La radio régionale n°1 de la ville de Sfax',
      img:'./assets/imgs/radio-sfax-dh-sfqs.png'
    },
    {
      url:'http://radio.mosaiquefm.net:8000/mosalive',
      videoUrl:'https://webcam.mosaiquefm.net:1936/mosalive/studio/playlist.m3u8',
      title:'Mosaique FM',
      descp:'Radio Mosaïque FM Tunisie est la plus connue dans le pays.',
      img:'./assets/imgs/mosaique-fm_0.png'
    },
    {
      url:'http://stream6.tanitweb.com/shems',
      videoUrl:'',
      title:'Shems FM',
      descp:'la quatrième station de radio privée de Tunisie',
      img:'./assets/imgs/shems-fm.jpg'
    },
    {
      url:'http://streaming2.toutech.net:8000/jawharafm',
      videoUrl:'https://streaming.toutech.net/live/jfm/index.m3u8',
      title:'Jawhara FM',
      descp:'La radio la plus écoutée au Sahel Tunisien',
      img:'./assets/imgs/jawhara-fm.jpg'
    },
    {
      url:'http://ifm.tn:8000/direct',
      videoUrl:'',
      title:'IFM',
      descp:'IFM est la première radio en Tunisie spécialisée dans le rire et la musique',
      img:'./assets/imgs/ifm.png'
    },
    {
      url:'http://stream8.tanitweb.com/zitounafm',
      videoUrl:'',
      title:'Zitouna FM إذاعة الزيتونة',
      descp:'Zaytouna FM est la première station radio à vocation religieuse en Tunisie.',
      img:'./assets/imgs/zitouna-fm.jpg'
    },
    {
      url:'http://rtstream.tanitweb.com/nationale',
      videoUrl:'',
      title:'Radio Tunis Nationale الإذاعة الوطنية التونسية',
      descp:'Radio Tunis est la principale radio publique du pays.',
      img:'./assets/imgs/radio-tunis-nationale-ldh-lwtny-ltwnsy.png'
    },
    {
      url:'http://expressfm.ice.infomaniak.ch/expressfm-64.mp3',
      videoUrl:'',
      title:'Express FM',
      descp:'Station à vocation économique classée dans le Top 5 des radios tunisiennes',
      img:'./assets/imgs/express-fm.png'
    },
    {
      url:'http://streaming.knoozfm.net:8000/knoozfm',
      videoUrl:'',
      title:'KnOOz FM',
      descp:'KnOOz FM est la 1ère radio du divertissementdu Grand Sahel Tunisien.',
      img:'./assets/imgs/knooz-fm.png'
    },
    {
      url:'http://stream6.tanitweb.com/sabrafm',
      videoUrl:'',
      title:'Sabra FM',
      descp:'Sabra FM est la première radio de Kairouan. Sabra FM une radio privée qui jouirait d\'une certaine marge de liberté et qui transmettrait les opinions et les requêtes des "vrais" gens à Kairouan.',
      img:'./assets/imgs/sabra-fm.png'
    },
    {
      url:'http://stream8.tanitweb.com/diwanfm',
      videoUrl:'',
      title:'Diwan FM',
      descp:'Première radio privée à Sfax',
      img:'./assets/imgs/diwan-fm.png'
    },
    {
      url:'http://stream8.tanitweb.com/capfm',
      videoUrl:'',
      title:'Cap FM',
      descp:'Cap FM est la première radio du CAP BON est ses environs.',
      img:'./assets/imgs/cap-fm.png'
    },
    {
      url:'http://rtstream.tanitweb.com/jeunes',
      videoUrl:'',
      title:'Radio Jeunes Tunisie',
      descp:'راديو الشباب Radio Tunisienne 100% jeunesse en langue arabe',
      img:'./assets/imgs/radio-jeunes-tunisie.png'
    },
    {
      url:'http://rtstream.tanitweb.com/monastir',
      videoUrl:'',
      title:'Radio Monastir إذاعة المنستير',
      descp:'Radio publique régionale de la ville de Monastir. إذاعة مدينة منستير، عمومية.',
      img:'./assets/imgs/radio-monastir-dh-lmnstyr.png'
    },
    {
      url:'http://rtstream.tanitweb.com/rtci',
      videoUrl:'',
      title:'RTCI',
      descp:'Radio Tunis Chaîne Internationale ou RTCI est une station radiophonique tunisienne multi-langue.',
      img:'./assets/imgs/rtci.png'
    },
    {
      url:'http://listen.shoutcast.com/panoramatunis',
      videoUrl:'',
      title:'Radio Panorama',
      descp:'Radio Panorma est une radio thématique publique qui a démarré sa diffusion expérimentale en août 2016.',
      img:'./assets/imgs/radio-panorama_0.png'
    },
    {
      url:'http://5.135.194.225:8000/live',
      videoUrl:'',
      title:'Radio Quran - إذاعة القرآن',
      descp:'Radio Quran Tunisie est une radio privée religieuse qui émet sur la fréquence 97.7.',
      img:'./assets/imgs/radio-quran-dh-lqran.jpg'
    },
    {
      url:'http://rtstream.tanitweb.com/kef',
      videoUrl:'',
      title:'Radio Kef إذاعة الكاف',
      descp:'Radio Le Kef إذاعة الكاف est une radio régionale et généraliste tunisienne fondée le 7 novembre 1991.',
      img:'./assets/imgs/radio-kef-dh-lkf.png'
    },
    {
      url:'http://rtstream.tanitweb.com/sfax',
      videoUrl:'',
      title:'Radio Sfax إذاعة صفاقس',
      descp:'La radio régionale n°1 de la ville de Sfax',
      img:'./assets/imgs/radio-sfax-dh-sfqs.png'
    },
    {
      url:'http://rtstream.tanitweb.com/gafsa',
      videoUrl:'',
      title:'Radio Gafsa إذاعة قفصة',
      descp:'Radio Gafsa est une radio régionale et généraliste tunisienne dont la décision de création a été annoncée le 13 février 1991.',
      img:'./assets/imgs/radio-gafsa-dh-qfs.png'
    },
    {
      url:'http://rtstream.tanitweb.com/culturelle',
      videoUrl:'',
      title:'Radio Culture الإذاعة الثقافية',
      descp:'Radio publique tunisienne sur le thème de la culture. إذاعة عمومية ذات صبغة ثقافية',
      img:'./assets/imgs/radio-culture-ldh-lthqfy.png'
    },
    {
      url:'http://rtstream.tanitweb.com/tataouine',
      videoUrl:'',
      title:'Radio Tataouine',
      descp:'إذاعة تطاوين Radio régionale (Sud Tunisien) lancée le 7 novembre 1993',
      img:'./assets/imgs/radio-tatouine.png'
    }
  ];


  videoOpts : VideoOptions ;
  @ViewChild('video1') video1;

  public emptyVideo = {
    url: this.video_link,
    thumbnail: {
      url: './assets/imgs/radio-sfax-dh-sfqs.png'
    }
  };
  public videoBuffer: Array<any> = [this.emptyVideo];

  constructor(public navCtrl: NavController, public navParams: NavParams, public player: RadioServiceProvider,private videoPlayer : VideoPlayer,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioSafxPage');
  }


  play(Data) {
    this.player.play(Data);
  }

  pause(Data) {
    this.player.pause(Data);
  }

  public playVideo(){
    this.videoOpts = {volume : 1.0};
    this.videoPlayer.play('').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  public stopPlayingVideo(){
    this.videoPlayer.close();
  }

  callVideo(myEvent,data){
    let popover = this.popoverCtrl.create(RadioDetailPage,{Data :data});
    popover.present({
      ev: myEvent
    });
  }

}
