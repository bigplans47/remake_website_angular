import { Component } from '@angular/core';
import { Place } from './models/place.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test: string = 'add component test'
  // masterPlaces: Place[] = [
  //   new Place('place1', 5, 'picture_url'),
  //   new Place('place2', 5, 'picture_url'),
  //   new Place('place3', 5, 'picture_url'),
  //   new Place('place4', 5, 'picture_url')
  // ]

  likePlace(whatLiked) {
    whatLiked.likes++;
    console.log(whatLiked.likes);
    // console.log(this.masterPlaces)
  }
}
