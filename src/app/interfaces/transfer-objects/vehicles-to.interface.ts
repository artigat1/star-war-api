import {Vehicle} from '../vehicle.interface';

/**
 * Interface for classes that represent the Star Wars vehicles transfer object from the API.
 * @interface
 */
export interface VehiclesTo {
  count: number;
  next: string;
  previous: string;
  results: Vehicle[];
}
