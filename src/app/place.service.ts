import { Injectable } from '@angular/core';
import { Place } from './models/place.model';
// import { PLACES} from './mock-projects';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlaceService {
  places: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase ) {
    this.places = database.list('places2');
  }

  getPlaces() {
    return this.places;
  }

  getPlaceById(placeId: string){
    return this.database.object('places2/' + placeId);
  }

  addPlace(thePlace: Place) {
    this.places.push(thePlace);
  }

  updatePlace(thePlaceUpdating){
    var databaseEntryForPlace = this.getPlaceById(thePlaceUpdating.$key);
    databaseEntryForPlace.update({
      name: thePlaceUpdating.name,
      rating: thePlaceUpdating.rating,
      picture: thePlaceUpdating.picture
    });
  }
  
}
