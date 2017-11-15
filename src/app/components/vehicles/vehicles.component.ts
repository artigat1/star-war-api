import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Vehicle} from '../../interfaces/vehicle.interface';
import * as SWActions from '../../store/actions/star-wars.actions';
import * as fromApp from '../../store/reducers';
import * as fromSW from '../../store/reducers/star-wars.reducer';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesComponent implements OnInit {

  error$: Observable<string>;
  vehicles$: Observable<Vehicle[]>;

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new SWActions.LoadVehicles(1));

    this.error$ = this.store.select(fromSW.getError);
    this.vehicles$ = this.store.select(fromSW.getVehicles);
  }

}
