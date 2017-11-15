import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {FilmsComponent} from './components/films/films.component';
import {HomeComponent} from './components/home/home.component';
import {PeopleComponent} from './components/people/people.component';
import {PlanetsComponent} from './components/planets/planets.component';
import {StarshipsComponent} from './components/starships/starships.component';
import {SpeciesComponent} from './components/species/species.component';
import {VehiclesComponent} from './components/vehicles/vehicles.component';

const APP_ROUTES: Routes = [
  {path: 'films', component: FilmsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    StoreRouterConnectingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
