import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlaceComponent } from './add-place/add-place.component'
import { AboutComponent } from './about/about.component'
import { HomepageComponent } from './homepage/homepage.component'
import { ListOfPlacesComponent } from './list-of-places/list-of-places.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { AdminComponent } from './admin/admin.component'


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
    component: ListOfPlacesComponent
  },
  {
    path: 'places/:id',
    component: PlaceDetailComponent
  },
  {
    path: 'addPlace',
    component: AddPlaceComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
