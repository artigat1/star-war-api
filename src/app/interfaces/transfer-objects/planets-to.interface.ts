import {Planet} from '../planet.interface';

/**
 * Interface for classes that represent the Star Wars planets transfer object from the API.
 * @interface
 */
export interface PlanetsTo {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}
