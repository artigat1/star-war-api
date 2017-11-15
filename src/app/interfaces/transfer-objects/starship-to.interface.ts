import {Starship} from '../starship.interface';

/**
 * Interface for classes that represent the Star Wars starships transfer object from the API.
 * @interface
 */
export interface StarshipTo {
  count: number;
  next: string;
  previous: string;
  results: Starship[];
}
