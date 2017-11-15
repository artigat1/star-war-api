import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Species} from '../../../interfaces/species.interface';

@Component({
  selector: 'app-species-card',
  templateUrl: './species-card.component.html',
  styleUrls: ['./species-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeciesCardComponent {

  @Input()
  species: Species;

}
