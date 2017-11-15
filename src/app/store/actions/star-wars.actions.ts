import {type} from '../type-cache';
import {ActionWithPayload} from '../action-with-payload';
import {Film, Person, Planet, Species, Starship, Vehicle} from '../../interfaces';

export const Types = {
  LOAD_FILMS: type('[films] Load films'),
  FILMS_LOADED: type('[films] Films loaded'),
  LOAD_PEOPLE: type('[people] Load people'),
  PEOPLE_LOADED: type('[people] People loaded'),
  LOAD_PLANETS: type('[planets] Load planets'),
  PLANETS_LOADED: type('[planets] Planets loaded'),
  LOAD_SPECIES: type('[species] Load species'),
  SPECIES_LOADED: type('[species] Species loaded'),
  LOAD_STARSHIPS: type('[starships] Load starships'),
  STARSHIPS_LOADED: type('[starships] Starships loaded'),
  LOAD_VEHICLES: type('[vehicles] Load vehicles'),
  VEHICLES_LOADED: type('[vehicles] Vehicles loaded'),
  LOAD_ERROR: type('[error] Error loading resource')
};

/**
 * Loads the films.
 * @constructor takes the page number {number} (>0) as the payload.
 * @class LoadFilms
 */
export class LoadFilms implements ActionWithPayload<number> {
  readonly type = Types.LOAD_FILMS;

  constructor(public payload: number) {
  }
}

/**
 * Films successfully loaded
 * @constructor takes the array of films {Film} as the payload.
 * @class FilmsLoaded
 * @see Film
 */
export class FilmsLoaded implements ActionWithPayload<Film[]> {
  readonly type = Types.FILMS_LOADED;

  constructor(public payload: Film[]) {
  }
}

/**
 * Loads the people.
 * @constructor takes the page number {number} (>0) as the payload.
 * @class LoadPeople
 */
export class LoadPeople implements ActionWithPayload<number> {
  readonly type = Types.LOAD_PEOPLE;

  constructor(public payload: number) {
  }
}

/**
 * People successfully loaded
 * @constructor takes the array of people {People} as the payload.
 * @class PeopleLoaded
 * @see Person
 */
export class PeopleLoaded implements ActionWithPayload<Person[]> {
  readonly type = Types.PEOPLE_LOADED;

  constructor(public payload: Person[]) {
  }
}

/**
 * Loads the planets.
 * @constructor takes the page number {number} (>0) as the payload.
 * @class LoadPlanets
 */
export class LoadPlanets implements ActionWithPayload<number> {
  readonly type = Types.LOAD_PLANETS;

  constructor(public payload: number) {
  }
}

/**
 * Planets successfully loaded
 * @constructor takes the array of planets {Planet} as the payload.
 * @class PlanetsLoaded
 * @see Planet
 */
export class PlanetsLoaded implements ActionWithPayload<Planet[]> {
  readonly type = Types.PLANETS_LOADED;

  constructor(public payload: Planet[]) {
  }
}

/**
 * Loads the species.
 * @constructor takes the page number {number} (>0) as the payload.
 * @class LoadSpecies
 */
export class LoadSpecies implements ActionWithPayload<number> {
  readonly type = Types.LOAD_SPECIES;

  constructor(public payload: number) {
  }
}

/**
 * Species successfully loaded
 * @constructor takes the array of species {Species} as the payload.
 * @class SpeciesLoaded
 * @see Species
 */
export class SpeciesLoaded implements ActionWithPayload<Species[]> {
  readonly type = Types.SPECIES_LOADED;

  constructor(public payload: Species[]) {
  }
}

/**
 * Loads the starships.
 * @constructor takes the page number {number} (>0) as the payload.
 * @class LoadStarships
 */
export class LoadStarships implements ActionWithPayload<number> {
  readonly type = Types.LOAD_STARSHIPS;

  constructor(public payload: number) {
  }
}

/**
 * Starships successfully loaded
 * @constructor takes the array of starships {Starship} as the payload.
 * @class StarshipsLoaded
 * @see Starship
 */
export class StarshipsLoaded implements ActionWithPayload<Starship[]> {
  readonly type = Types.STARSHIPS_LOADED;

  constructor(public payload: Starship[]) {
  }
}

/**
 * Loads the vehicles.
 * @constructor takes the page number {number} (>0) as the payload.
 * @class LoadVehicles
 */
export class LoadVehicles implements ActionWithPayload<number> {
  readonly type = Types.LOAD_VEHICLES;

  constructor(public payload: number) {
  }
}

/**
 * Vehicles successfully loaded
 * @constructor takes the array of vehicle {Vehicle} as the payload.
 * @class VehiclesLoaded
 * @see Vehicle
 */
export class VehiclesLoaded implements ActionWithPayload<Vehicle[]> {
  readonly type = Types.VEHICLES_LOADED;

  constructor(public payload: Vehicle[]) {
  }
}

/**
 * Error when loading the resource.
 * @constructor takes the error message {string} as the payload.
 * @class LoadError
 */
export class LoadError implements ActionWithPayload<string> {
  readonly type = Types.LOAD_ERROR;

  constructor(public payload: string) {
  }
}

/**
 * Actions type.
 * @type {Actions}
 */
export type Actions =
  LoadFilms
  | FilmsLoaded
  | LoadPeople
  | PeopleLoaded
  | LoadPlanets
  | PlanetsLoaded
  | LoadSpecies
  | SpeciesLoaded
  | LoadStarships
  | StarshipsLoaded
  | LoadVehicles
  | VehiclesLoaded
  | LoadError;
