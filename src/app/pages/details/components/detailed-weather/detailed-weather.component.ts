import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { DirectionWind } from 'src/app/shared/models/direction-wind.model';
import { Weather } from 'src/app/shared/models/weather.model';
import { Units } from 'src/app/shared/models/units.enum';
import { unitToSymbol } from 'src/app/shared/utils/units.utils';
import { directionWind } from 'src/app/shared/utils/direction-wind.utils';
import { convertTime } from 'src/app/shared/utils/date-time.utils';
import { requestIcon } from "src/app/shared/utils/weather-icon.utils";

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
    return `${this.weather.rain === undefined ?  ' - '  :  this.weather.rain["1h"] } mm`
  }

  get unitSymbol(): string {
    return unitToSymbol(this.unit);
  }

  ToHourMinute(value: number): string{
    return convertTime(value, this.timeZone);
  }
}
