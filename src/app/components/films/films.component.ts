import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Film} from '../../interfaces/film.interface';
import * as SWActions from '../../store/actions/star-wars.actions';
import * as fromApp from '../../store/reducers';
import * as fromSW from '../../store/reducers/star-wars.reducer';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent implements OnInit {

  error$: Observable<string>;
  films$: Observable<Film[]>;

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new SWActions.LoadFilms(1));

    this.error$ = this.store.select(fromSW.getError);
    this.films$ = this.store.select(fromSW.getFilms);
  }

}
