import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlaceComponent } from './add-place/add-place.component'
import { AboutComponent } from './about/about.component'
import { HomepageComponent } from './homepage/homepage.component'

const appRoutes: Routes = [
  {
    path: '',
    component: AddPlaceComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
