import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Species} from '../../interfaces/species.interface';
import * as SWActions from '../../store/actions/star-wars.actions';
import * as fromApp from '../../store/reducers';
import * as fromSW from '../../store/reducers/star-wars.reducer';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeciesComponent implements OnInit {

  error$: Observable<string>;
  species$: Observable<Species[]>;

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new SWActions.LoadSpecies(1));

    this.error$ = this.store.select(fromSW.getError);
    this.species$ = this.store.select(fromSW.getSpecies);
  }

}
