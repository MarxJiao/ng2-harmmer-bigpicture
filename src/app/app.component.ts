import { Component } from '@angular/core';
import { Picture } from './PictureData.service.ts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    pictureData = new Picture();
    title = 'hallo world';
    screenHeight = window.screen.height + 'px';
    screenWidth = window.screen.width + 'px';
    ulWidth = window.screen.width * this.pictureData.picArray.length + 'px';
    constructor() {
        console.log(document.body.clientHeight);
    }
}
