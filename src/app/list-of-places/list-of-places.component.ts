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
  constructor(private router: Router){}

  editButtonClicked(place){
    this.clickSender.emit(place)
  }


  goToDetailPage(singlePlace){
    console.log('test')
    this.router.navigate(['places', singlePlace.id])
  }


  ngOnInit() {
  }

}
