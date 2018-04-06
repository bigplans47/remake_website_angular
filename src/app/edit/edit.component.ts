import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PlaceService]
})
export class EditComponent implements OnInit {
  @Input() selectedPlace;
  constructor(private placeService: PlaceService) { }

  ngOnInit() {
  }

  saveEdits(thisPlace) {
    this.placeService.updatePlace(thisPlace)
  }

  deletePlace(thePlace){
    this.placeService.deletePlace(thePlace);
  }

}
