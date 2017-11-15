import {Film} from '../film.interface';

/**
 * Interface for classes that represent the Star Wars films transfer object from the API.
 * @interface
 */
export interface FilmTo {
  count: number;
  next: string;
  previous: string;
  results: Film[];
}
