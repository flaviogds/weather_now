import { Injectable } from "@angular/core";

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { WeatherService } from 'src/app/shared/services/weather.service';

import { CityList } from 'src/app/shared/models/weather.model';

import { AppState } from 'src/app/shared/state/app.reducer';
import * as fromBookmarksActions from './bookmarks.actions';

@Injectable()
export class BookmarksEffects {

  loadGroupOfCitys$ = createEffect(() => this.actions$
      .pipe(
        ofType(fromBookmarksActions.loadGroupOfCitys),
        mergeMap(({ list }) => this.weatherService.getGroupOfCityWeatherById(list)),
        catchError((err, caught$) => {
          this.store.dispatch(fromBookmarksActions.loadGroupOfCitysFailed());
          return caught$;
        }),
        map((listOfCitys: CityList) => fromBookmarksActions.loadGroupOfCitysSuccess({ listOfCitys })),
      ),
  );

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private weatherService: WeatherService)
  { }
}