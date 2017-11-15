import {Person} from '../person.interface';

/**
 * Interface for classes that represent the Star Wars people transfer object from the API.
 * @interface
 */
export interface PeopleTo {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}
