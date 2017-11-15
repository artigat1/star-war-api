import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {of} from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import {FilmTo, PeopleTo, PlanetsTo, SpeciesTo, StarshipTo, VehiclesTo} from '../../interfaces/transfer-objects';
import {SearchService} from '../../services/search.service';
import {SwapiResource} from '../../shared/swapi-resources.enum';
import * as SWActions from '../actions/star-wars.actions';
import {} from '../../interfaces/transfer-objects/planets-to.interface';

@Injectable()
export class StarWarsEffectService {

  @Effect()
  getFilms$: Observable<Action> = this.actions$
    .ofType(SWActions.Types.LOAD_FILMS)
    .map((action: SWActions.LoadFilms) => action.payload > 0 ? action.payload : 1)
    .switchMap(page =>
      this.service
        .get(SwapiResource.Films, page)
        .map((films: FilmTo) => new SWActions.FilmsLoaded(films.results))
        .catch(err => of(new SWActions.LoadError(err.message))));

  @Effect()
  getPeople$: Observable<Action> = this.actions$
    .ofType(SWActions.Types.LOAD_PEOPLE)
    .map((action: SWActions.LoadPeople) => action.payload > 0 ? action.payload : 1)
    .switchMap(page =>
      this.service
        .get(SwapiResource.People, page)
        .map((people: PeopleTo) => new SWActions.PeopleLoaded(people.results))
        .catch(err => of(new SWActions.LoadError(err.message))));

  @Effect()
  getPlanets$: Observable<Action> = this.actions$
    .ofType(SWActions.Types.LOAD_PLANETS)
    .map((action: SWActions.LoadPlanets) => action.payload > 0 ? action.payload : 1)
    .switchMap(page =>
      this.service
        .get(SwapiResource.Planets, page)
        .map((planets: PlanetsTo) => new SWActions.PlanetsLoaded(planets.results))
        .catch(err => of(new SWActions.LoadError(err.message))));

  @Effect()
  getSpecies$: Observable<Action> = this.actions$
    .ofType(SWActions.Types.LOAD_SPECIES)
    .map((action: SWActions.LoadSpecies) => action.payload > 0 ? action.payload : 1)
    .switchMap(page =>
      this.service
        .get(SwapiResource.Species, page)
        .map((species: SpeciesTo) => new SWActions.SpeciesLoaded(species.results))
        .catch(err => of(new SWActions.LoadError(err.message))));

  @Effect()
  getStarships$: Observable<Action> = this.actions$
    .ofType(SWActions.Types.LOAD_STARSHIPS)
    .map((action: SWActions.LoadStarships) => action.payload > 0 ? action.payload : 1)
    .switchMap(page =>
      this.service
        .get(SwapiResource.Startships, page)
        .map((ships: StarshipTo) => new SWActions.StarshipsLoaded(ships.results))
        .catch(err => of(new SWActions.LoadError(err.message))));

  @Effect()
  getVehicles$: Observable<Action> = this.actions$
    .ofType(SWActions.Types.LOAD_VEHICLES)
    .map((action: SWActions.LoadVehicles) => action.payload > 0 ? action.payload : 1)
    .switchMap(page =>
      this.service
        .get(SwapiResource.Vehicles, page)
        .map((vehicles: VehiclesTo) => new SWActions.VehiclesLoaded(vehicles.results))
        .catch(err => of(new SWActions.LoadError(err.message))));

  constructor(private actions$: Actions,
              private service: SearchService) {
  }
}
