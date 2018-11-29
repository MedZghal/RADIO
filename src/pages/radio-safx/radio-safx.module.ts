import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioSafxPage } from './radio-safx';
import {VgCoreModule} from "videogular2/core";
import {VgControlsModule} from "videogular2/controls";
import {VgOverlayPlayModule} from "videogular2/overlay-play";
import {VgBufferingModule} from "videogular2/buffering";
import {VgStreamingModule} from "videogular2/streaming";

@NgModule({
  declarations: [
    RadioSafxPage,
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    IonicPageModule.forChild(RadioSafxPage),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioSafxPageModule {}
