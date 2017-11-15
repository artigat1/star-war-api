/**
 * Interface for classes that represent the Star Wars species.
 * @interface
 */
export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: number;
  homeworld: string;
  language: string;
  people: Array<string>;
  films: Array<string>;
  created: Date;
  edited: Date;
  url: string;
}
