import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListOfPlacesComponent } from './list-of-places/list-of-places.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListOfPlacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
