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
    constructor() {
        console.log(this);
    }
}
