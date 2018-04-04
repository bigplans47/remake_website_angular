import { Injectable } from '@angular/core';
import { Place } from './models/place.model'
import { PLACES} from './mock-projects'

@Injectable()
export class PlaceService {

  constructor() { }

  getPlaces() {
    return PLACES;
  }

}
