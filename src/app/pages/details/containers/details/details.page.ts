import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CityDailyWeather } from 'src/app/shared/models/weather.model';
import { convertData, convertDataTitle } from 'src/app/shared/utils/date-time.utils';
import { Units } from 'src/app/shared/models/units.enum';

import { AppState } from 'src/app/shared/state/app.reducer';
import * as fromDetailsActions from '../../state/details.actions';
import * as fromDetailsSelectors from '../../state/details.selectors';
import * as fromConfigSelectors from 'src/app/shared/state/config/config.selectors';

@Component({
  selector: 'wn-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {

  details$: Observable<CityDailyWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;
  unit$: Observable<Units>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());
    this.details$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsEntity));
    this.loading$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsLoading));
    this.error$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsError));
    this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
  }

  dateTitle(date: number): any{
    return convertDataTitle(date);
  }

  validate(date: number): string{
    return convertData(date);
  }
}
