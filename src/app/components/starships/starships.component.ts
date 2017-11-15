import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Starship} from '../../interfaces/starship.interface';
import * as SWActions from '../../store/actions/star-wars.actions';
import * as fromApp from '../../store/reducers';
import * as fromSW from '../../store/reducers/star-wars.reducer';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarshipsComponent implements OnInit {

  error$: Observable<string>;
  starships$: Observable<Starship[]>;

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new SWActions.LoadStarships(1));

    this.error$ = this.store.select(fromSW.getError);
    this.starships$ = this.store.select(fromSW.getStarships);
  }

}
