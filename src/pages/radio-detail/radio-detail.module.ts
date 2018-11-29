import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioDetailPage } from './radio-detail';
import {VgCoreModule} from "videogular2/core";
import {VgControlsModule} from "videogular2/controls";
import {VgOverlayPlayModule} from "videogular2/overlay-play";
import {VgBufferingModule} from "videogular2/buffering";
import {VgStreamingModule} from "videogular2/streaming";

@NgModule({
  declarations: [
    RadioDetailPage,
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    IonicPageModule.forChild(RadioDetailPage),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioDetailPageModule {}
