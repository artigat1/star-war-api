import {Species} from '../species.interface';

/**
 * Interface for classes that represent the Star Wars species transfer object from the API.
 * @interface
 */
export interface SpeciesTo {
  count: number;
  next: string;
  previous: string;
  results: Species[];
}
