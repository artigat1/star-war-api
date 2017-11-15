import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Starship} from '../../../interfaces/starship.interface';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarshipCardComponent {

  @Input()
  starship: Starship;

}
