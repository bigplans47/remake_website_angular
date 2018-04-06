import { Component } from '@angular/core';
import { Place } from './models/place.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  likePlace(whatLiked) {
    whatLiked.likes++;
  }
}
