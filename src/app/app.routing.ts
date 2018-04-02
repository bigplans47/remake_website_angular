import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlaceComponent } from './add-place/add-place.component'
import { AboutComponent } from './about/about.component'
import { HomepageComponent } from './homepage/homepage.component'
import { ListOfPlacesComponent } from './list-of-places/list-of-places.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'places',
    component: AddPlaceComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
]

// <a class="aHeader">Hotels</a>
// <a class="aHeader">Vacation Rentals</a>
// <a class="aHeader">Flights</a>
// <a class="aHeader">Restaurants</a>
// <a class="aHeader">Things to do</a>

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
