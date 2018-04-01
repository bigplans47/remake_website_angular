import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../models/place.model';


@Component({
  selector: 'app-list-of-places',
  templateUrl: './list-of-places.component.html',
  styleUrls: ['./list-of-places.component.css']
})
export class ListOfPlacesComponent implements OnInit {
  @Input() childPlacesList: Place[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(place){
    this.clickSender.emit(place)
  }

  constructor() { }

  ngOnInit() {
  }

}
