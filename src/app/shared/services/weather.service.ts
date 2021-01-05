import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { responseToCityWeather, responseToCityDailyWeather } from '../utils/response.utils';
import { CityWeather, CityDailyWeather } from '../models/weather.model';
import { AppState } from '../state/app.reducer';
import { Units } from '../models/units.enum';
import * as fromConfigSelectors from '../state/config/config.selectors';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnDestroy {

  private unit: Units;

  private serviceDestroyed$ = new Subject();

  constructor(private http: HttpClient,
              private store: Store<AppState>) {
    store
      .pipe(
        select(fromConfigSelectors.selectUnitConfig),
        takeUntil(this.serviceDestroyed$),
      )
      .subscribe((unit: Units) => this.unit = unit);
  }

  ngOnDestroy() {
    this.serviceDestroyed$.next();
    this.serviceDestroyed$.unsubscribe();
  }

  getCityWeatherByQuery(query: string): Observable<CityWeather> {
    const params = new HttpParams({ fromObject: { q: query } });
    return this.doGet<any>('weather', params)
      .pipe(map(response => {
        return responseToCityWeather(response)
      }));
  }

  getCityWeatherById(id: string): Observable<CityWeather> {
    const params = new HttpParams({fromObject: {id}});
    return this.doGet<any>('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }

  getCityWeatherByCoord(lat: number, lon: number): Observable<CityWeather> {
    const params = new HttpParams({fromObject: {
      lat: lat.toString(),
      lon: lon.toString(),
    }});
    return this.doGet<any>('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }

  getWeatherDetails(lat: number, lon: number): Observable<CityDailyWeather> {
    const params = new HttpParams({fromObject: {
      lat: lat.toString(),
      lon: lon.toString(),
      exclude: environment.config.details_filter,
    }});
    return this.doGet<any>('onecall', params)
      .pipe(map(response => responseToCityDailyWeather(response)));
  }

  private doGet<T>(url: string, params: HttpParams): Observable<T> {
    params = params.append('appid', environment.apiKey);
    params = params.append('lang', environment.config.lang);
    if (this.unit !== environment.config.default_units) {
      params = params.append('units', this.unit.toLocaleLowerCase());
    }
    return this.http.get<T>(environment.apiUrl.concat(url), { params });
  }
}
