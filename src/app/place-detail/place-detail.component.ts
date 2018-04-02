import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Place } from '../models/place.model';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) { }
  placeId = null;
  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.placeId = urlParameters['id'];
    })
  }

}
