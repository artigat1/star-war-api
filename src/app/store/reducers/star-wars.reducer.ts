import {createSelector} from 'reselect';

import {Film, Person, Planet, Species, Starship, Vehicle} from '../../interfaces';
import {dynamicSort} from '../../shared/utils';
import * as Actions from '../actions/star-wars.actions';
import * as fromApp from './index';

/**
 * Interface for classes that represent the Star Wars state.
 * @interface
 */
export interface State {
  films: Film[];
  people: Person[];
  planets: Planet[];
  species: Species[];
  starships: Starship[];
  vehicles: Vehicle[];
  error?: string;
}

export const INITIAL_STATE: State = {
  films: [],
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: []
};

export function starWarsStateReducer(state: State = INITIAL_STATE, action: any): State {
  switch (action.type) {

    case Actions.Types.FILMS_LOADED:
      return {
        ...state,
        films: action.payload.sort(dynamicSort('episode_id'))
      };

    case Actions.Types.PEOPLE_LOADED:
      return {
        ...state,
        people: action.payload.sort(dynamicSort('name'))
      };

    case Actions.Types.PLANETS_LOADED:
      return {
        ...state,
        planets: action.payload.sort(dynamicSort('name'))
      };

    case Actions.Types.SPECIES_LOADED:
      return {
        ...state,
        species: action.payload.sort(dynamicSort('name'))
      };

    case Actions.Types.STARSHIPS_LOADED:
      return {
        ...state,
        starships: action.payload.sort(dynamicSort('name'))
      };

    case Actions.Types.VEHICLES_LOADED:
      return {
        ...state,
        vehicles: action.payload.sort(dynamicSort('name'))
      };

    default:
      return state;
  }
}

/**********************************************************
 * Star Wars Selectors
 *********************************************************/

/**
 * Returns the Star Wars state.
 * @function getStarWarsState
 * @param {State} state - Top level state.
 * @return {State} state - Rule level state
 */
export const getStarWarsState = (state: fromApp.State) => state.starWars;

/**
 * Returns the films.
 * @function getFilms
 * @param {State} state - Star Wars level state
 * @param {any} props
 * @return {Film[]}
 */
export const getFilms = createSelector(getStarWarsState, (state: State) => state.films);

/**
 * Returns the people.
 * @function getPeople
 * @param {State} state - Star Wars level state
 * @param {any} props
 * @return {Person[]}
 */
export const getPeople = createSelector(getStarWarsState, (state: State) => state.people);

/**
 * Returns the planets.
 * @function getPlanets
 * @param {State} state - Star Wars level state
 * @param {any} props
 * @return {Planet[]}
 */
export const getPlanets = createSelector(getStarWarsState, (state: State) => state.planets);

/**
 * Returns the species.
 * @function getSpecies
 * @param {State} state - Star Wars level state
 * @param {any} props
 * @return {Species[]}
 */
export const getSpecies = createSelector(getStarWarsState, (state: State) => state.species);

/**
 * Returns the starships.
 * @function getStarships
 * @param {State} state - Star Wars level state
 * @param {any} props
 * @return {Starship[]}
 */
export const getStarships = createSelector(getStarWarsState, (state: State) => state.starships);

/**
 * Returns the vehicles.
 * @function getVehicles
 * @param {State} state - Star Wars level state
 * @param {any} props
 * @return {Vehicle[]}
 */
export const getVehicles = createSelector(getStarWarsState, (state: State) => state.vehicles);

/**
 * Returns the error.
 * @function getError
 * @param {State} state - Star Wars level state
 * @param {any} props
 * @return {string}
 */
export const getError = createSelector(getStarWarsState, (state: State) => state.error);
