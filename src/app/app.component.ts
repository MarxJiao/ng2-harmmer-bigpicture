import { Component } from '@angular/core';
import { Picture } from './PictureData.service';
// require('harmmerjs');
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {

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
