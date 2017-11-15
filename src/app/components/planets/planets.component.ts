import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Planet} from '../../interfaces';
import * as SWActions from '../../store/actions/star-wars.actions';
import * as fromApp from '../../store/reducers';
import * as fromSW from '../../store/reducers/star-wars.reducer';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  error$: Observable<string>;
  planets$: Observable<Planet[]>;

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new SWActions.LoadPlanets(1));

    this.error$ = this.store.select(fromSW.getError);
    this.planets$ = this.store.select(fromSW.getPlanets);
  }
}
