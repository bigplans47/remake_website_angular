import { Injectable } from '@angular/core';
import { Place } from './models/place.model';
// import { PLACES} from './mock-projects';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlaceService {
  places: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase ) {
    this.places = database.list('places');
  }

  getPlaces() {
    return this.places;
  }

  getPlaceById(placeId: string){
    return this.database.object('places/' + placeId);
  }
    // console.log(this.places)
    // for( var i = 0; i <=this.places.length -1; i++) {
    //   if(this.places[i].id ===placeId) {
    //     return this.places[i];
    //     }
    //   }
    // }
}
