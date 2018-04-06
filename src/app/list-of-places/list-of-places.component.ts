import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../models/place.model';
import { Router } from '@angular/router';
import { PlaceService } from '../place.service';
import { FirebaseListObservable } from 'angularfire2/database'


@Component({
  selector: 'app-list-of-places',
  templateUrl: './list-of-places.component.html',
  styleUrls: ['./list-of-places.component.css'],
  providers: [PlaceService]
})
export class ListOfPlacesComponent implements OnInit {
  places: FirebaseListObservable<any[]>;
  @Input() childPlacesList: Place[];
  @Output() clickSender = new EventEmitter();

  constructor(private router: Router, private placeService: PlaceService){}

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  editButtonClicked(place){
    place.likes++;
    // this.clickSender.emit(place)
  }


  goToDetailPage(singlePlace){
    // this.router.navigate(['places', singlePlace.id])
    this.router.navigate(['places', singlePlace.$key]);
  }




}
