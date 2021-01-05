import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

import { DailyWeather, Weather } from 'src/app/shared/models/weather.model';
import { Units } from 'src/app/shared/models/units.enum';
import { unitToSymbol } from 'src/app/shared/utils/units.utils';
import { convertData, convertTime } from "src/app/shared/utils/date-time.utils";
import { requestIcon } from "src/app/shared/utils/weather-icon.utils";

@Component({
  selector: 'wn-daily-weather',
  templateUrl: 'daily-weather.component.html',
  styleUrls: ['daily-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyWeatherComponent {

  @Input() dailyWeather: DailyWeather;
  @Input() timeZone: string;
  @Input() unit: Units;

  get weather(): Weather {
    return this.dailyWeather.weather;
  }

  get date(): string {
    return convertData(this.dailyWeather.date);
  }

  get icon(): string {
    return requestIcon(this.weather.icon);
  }

  get unitSymbol() {
    return unitToSymbol(this.unit);
  }

  ToHourMinute(value: number): string{
    return convertTime(value, this.timeZone);
  }
}
