import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {SwapiResource} from '../shared/swapi-resources.enum';
import {FilmTo, PeopleTo} from '../interfaces/transfer-objects';
import {Planet, Species, Starship, Vehicle} from '../interfaces';

@Injectable()
export class SearchService {

  private apiEndpoint = 'https://swapi.co/api';

  constructor(private readonly httpClient: HttpClient) {
  }

  get(type: SwapiResource, page: number = 1): Observable<any> {

    switch (type) {
      case SwapiResource.Films:
        return this.httpClient.get<FilmTo>(`${this.apiEndpoint}/films?page=${page}`);

      case SwapiResource.People:
        return this.httpClient.get<PeopleTo>(`${this.apiEndpoint}/people?page=${page}`);

      case SwapiResource.Planets:
        return this.httpClient.get<Planet[]>(`${this.apiEndpoint}/planets?page=${page}`);

      case SwapiResource.Species:
        return this.httpClient.get<Species[]>(`${this.apiEndpoint}/species?page=${page}`);

      case SwapiResource.Startships:
        return this.httpClient.get<Starship[]>(`${this.apiEndpoint}/starships?page=${page}`);

      case SwapiResource.Vehicles:
        return this.httpClient.get<Vehicle[]>(`${this.apiEndpoint}/vehicles?page=${page}`);

    }
  }
}
