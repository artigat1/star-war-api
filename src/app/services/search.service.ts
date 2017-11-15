import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {SwapiResource} from '../shared/swapi-resources.enum';
import {FilmTo, PeopleTo, PlanetsTo, SpeciesTo, StarshipTo, VehiclesTo} from '../interfaces/transfer-objects';

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
        return this.httpClient.get<PlanetsTo>(`${this.apiEndpoint}/planets?page=${page}`);

      case SwapiResource.Species:
        return this.httpClient.get<SpeciesTo>(`${this.apiEndpoint}/species?page=${page}`);

      case SwapiResource.Startships:
        return this.httpClient.get<StarshipTo>(`${this.apiEndpoint}/starships?page=${page}`);

      case SwapiResource.Vehicles:
        return this.httpClient.get<VehiclesTo>(`${this.apiEndpoint}/vehicles?page=${page}`);

    }
  }
}
