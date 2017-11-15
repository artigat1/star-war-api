import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Person} from '../../interfaces/person.interface';
import * as SWActions from '../../store/actions/star-wars.actions';
import * as fromApp from '../../store/reducers';
import * as fromSW from '../../store/reducers/star-wars.reducer';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent implements OnInit {

  error$: Observable<string>;
  people$: Observable<Person[]>;

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new SWActions.LoadPeople(1));

    this.error$ = this.store.select(fromSW.getError);
    this.people$ = this.store.select(fromSW.getPeople);
  }

}
