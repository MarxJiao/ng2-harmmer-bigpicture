import { Component, OnInit } from '@angular/core';
import { Picture } from '../service/picture-data.service'

@Component({
  selector: 'app-harmmer',
  templateUrl: './harmmer.component.html',
  styleUrls: ['./harmmer.component.less']
})
export class HarmmerComponent implements OnInit {



  ngOnInit() {
  }
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    pictureData = new Picture();
    title = 'hallo world';
    screenHeight = window.screen.height + 'px';
    screenWidth = window.screen.width + 'px';
    ulWidth = window.screen.width * this.pictureData.picArray.length + 'px';
    constructor() {
        console.log(document.body.clientHeight);
    }
    log(e) {

    }

}
