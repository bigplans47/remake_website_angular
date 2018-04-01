import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlaceComponent } from './add-place/add-place.component'

const appRoutes: Routes = [
  {
    path: '',
    component: AddPlaceComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
