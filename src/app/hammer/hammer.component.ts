import { Component, OnInit, ElementRef } from '@angular/core';
import { Picture } from '../service/picture-data.service';
ElementRef

var a = require('hammerjs');
@Component({
  selector: 'app-hammer',
  templateUrl: './hammer.component.html',
  styleUrls: ['./hammer.component.less']
})
export class HammerComponent implements OnInit {



  ngOnInit() {
    console.log(this.el);
  }
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    el
    pictureData = new Picture();
    title = 'hallo world';
    screenHeight = window.screen.height + 'px';
    screenWidth = window.screen.width + 'px';
    ulWidth = window.screen.width * this.pictureData.picArray.length + 'px';
    constructor(el: ElementRef) {
        this.el = el// console.log();
    }
    log(a,e) {
        console.log(a);
    }
    log1(a,e) {
        e.preventDefault();
        console.log(a);
        // console.log(1,e);
    }

}
