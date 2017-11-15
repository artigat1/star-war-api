import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Vehicle} from '../../../interfaces/vehicle.interface';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleCardComponent {

  @Input()
  vehicle: Vehicle;

}
