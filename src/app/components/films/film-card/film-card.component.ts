import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Film} from '../../../interfaces/film.interface';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmCardComponent {

  @Input()
  film: Film;

}
