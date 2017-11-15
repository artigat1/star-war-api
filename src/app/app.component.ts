import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from './store/reducers';
import * as fromSW from './store/reducers/star-wars.reducer';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resources: Array<string> = ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'];
  error$: Observable<string>;

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit(): void {
    this.error$ = this.store.select(fromSW.getError);
  }
}
