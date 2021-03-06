import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HammerComponent } from './hammer/hammer.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HammerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{ 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: MyHammerConfig 
  } ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
    console.log(this)
  }
}

