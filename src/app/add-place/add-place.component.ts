import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../models/place.model';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
  providers: [PlaceService]
})
export class AddPlaceComponent implements OnInit {
  @Input() selectedPlace;
  constructor(private placeService: PlaceService) { }

  ngOnInit() {
  }

  submitPlace(nameOfPlace, ratingOfPlace, pictureOfPlace){
    let newPlace = new Place(nameOfPlace, ratingOfPlace, pictureOfPlace);
    this.placeService.addPlace(newPlace);
  }

}
