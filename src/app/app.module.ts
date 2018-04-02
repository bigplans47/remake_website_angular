import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListOfPlacesComponent } from './list-of-places/list-of-places.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListOfPlacesComponent,
    AddPlaceComponent,
    AboutComponent,
    PlaceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
