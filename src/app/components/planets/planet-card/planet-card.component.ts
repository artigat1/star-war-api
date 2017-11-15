import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Planet} from '../../../interfaces';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetCardComponent {

  @Input()
  planet: Planet;

}
