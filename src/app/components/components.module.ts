import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MaterialModule} from '../shared/material.module';

import {FilmsComponent} from './films/films.component';
import {HomeComponent} from './home/home.component';
import {FilmCardComponent} from './films/film-card/film-card.component';
import {PeopleComponent} from './people/people.component';
import {PersonCardComponent} from './people/person-card/person-card.component';
import {BrowserModule} from '@angular/platform-browser';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetCardComponent } from './planets/planet-card/planet-card.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipCardComponent } from './starships/starship-card/starship-card.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesCardComponent } from './species/species-card/species-card.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleCardComponent } from './vehicles/vehicle-card/vehicle-card.component';

@NgModule({
  declarations: [
    FilmsComponent,
    HomeComponent,
    FilmCardComponent,
    PeopleComponent,
    PersonCardComponent,
    PlanetsComponent,
    PlanetCardComponent,
    StarshipsComponent,
    StarshipCardComponent,
    SpeciesComponent,
    SpeciesCardComponent,
    VehiclesComponent,
    VehicleCardComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule
  ],
})
export class ComponentsModule {
}
