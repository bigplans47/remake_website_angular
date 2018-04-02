import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../models/place.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-of-places',
  templateUrl: './list-of-places.component.html',
  styleUrls: ['./list-of-places.component.css']
})
export class ListOfPlacesComponent implements OnInit {
  @Input() childPlacesList: Place[];
  @Output() clickSender = new EventEmitter();
  // childPlacesList2 = this.childPlacesList;

  places : Place [] = [
    new Place('place1', 5, 'picture_url'),
    new Place('place2', 5, 'picture_url'),
    new Place('place3', 5, 'picture_url'),
    new Place('place4', 5, 'picture_url')
  ]


  constructor(private router: Router){}

  editButtonClicked(place){
    place.likes++;
    // this.clickSender.emit(place)
  }


  goToDetailPage(singlePlace){
    console.log('test')
    this.router.navigate(['places', singlePlace.id])
  }


  ngOnInit() {
  }

}
