import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Weather } from '../../../../shared/models/weather.model';
import { Units } from '../../../../shared/models/units.enum';
import { unitToSymbol } from '../../../../shared/utils/units.utils';
import { directionWind } from '../../../../shared/utils/direction-wind.utils';
import { DirectionWind } from '../../../../shared/models/direction-wind.model';
import { convertTime } from '../../../../shared/utils/date-time.utils';
import { requestIcon } from '../../../../shared/utils/weather-icon.utils';

@Component({
  selector: 'wn-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent {

  @Input() weather: Weather;
  @Input() timeZone: string
  @Input() unit: Units;

  get weatherIcon(): string {
    return requestIcon(this.weather.icon);
  }

  get directionWind(): DirectionWind {
    return directionWind(this.weather.wind.deg);
  }

  get rain(): string {
    return this.weather.rain === undefined ? `- mm` : `${ this.weather.rain["1h"] } mm`
  }

  get unitSymbol(): string {
    return unitToSymbol(this.unit);
  }

  ToHourMinute(value: number): string{
    return convertTime(value, this.timeZone);
  }
}
