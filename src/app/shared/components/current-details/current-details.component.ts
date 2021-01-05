import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Units } from 'src/app/shared/models/units.enum';
import { Weather } from 'src/app/shared/models/weather.model';
import { unitToSymbol } from 'src/app/shared/utils/units.utils';
import { requestIcon } from 'src/app/shared/utils/weather-icon.utils';

@Component({
  selector: 'wn-current-details',
  templateUrl: './current-details.component.html',
  styleUrls: ['./current-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CurrentDetailsComponent {

  @Input() weather: Weather;
  @Input() unit: Units;

  get weatherIcon(): string {
    return requestIcon(this.weather.icon);
  }

  get unitSymbol(): string {
    return unitToSymbol(this.unit);
  }
}
