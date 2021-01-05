import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { Units } from '../../models/units.enum';
import { CityWeather } from '../../models/weather.model';

@Component({
  selector: 'wn-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent {

  @Input() cityWeather: CityWeather;
  @Input() isFavorite: boolean;
  @Input() unit: Units;
  @Output() toggleBookmark = new EventEmitter();

  get cityName(): string {
    return this.cityWeather.city.name; 
  }

  get countryName(): string {
    return this.cityWeather.city.country; 
  }

  onToggleBookmark() {
    this.toggleBookmark.emit();
  }
}
