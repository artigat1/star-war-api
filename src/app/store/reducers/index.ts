import * as fromStarWars from './star-wars.reducer';
import {ActionReducerMap} from '@ngrx/store';

/**
 * Interface for classes that represent the application's state.
 * @interface
 */
export interface State {
  starWars: fromStarWars.State;
}

export const reducers: ActionReducerMap<State> = {
  starWars: fromStarWars.starWarsStateReducer
};

export const INITIAL_STATE: State = {
  starWars: fromStarWars.INITIAL_STATE
};

/**********************************************************
 * App Reducers
 *********************************************************/


/**
 * Returns the complete app state.
 * @function getAppState
 * @param {State} state Top level state.
 * @return {State} - App state
 */
export const getAppState = (state: State) => state;
