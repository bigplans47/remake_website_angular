import { UUID } from 'angular2-uuid';

export class Place {
  public location: string = 'Budapest';
  public likes: number = 100;
  public id = UUID.UUID()
  constructor(public name: string, public rating: number, public picture: string) {}
}
