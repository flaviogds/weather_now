import { createAction, props } from '@ngrx/store';

import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityList } from 'src/app/shared/models/weather.model';

export const removeBookmark = createAction(
  '[Bookmarmark] Remove Bookmark',
  props<{ id: number }>(),
);

export const updateBookmarksList = createAction(
  '[Bookmarks] Update Bookmarks List',
  props<{ list: Bookmark[] }>(),
);

export const loadGroupOfCitys = createAction(
  '[Bookmarks] Load Group Of Citys',
  props<{ list: string[] }>(),
);

export const loadGroupOfCitysSuccess = createAction(
  '[Weather API] Load Group Of Citys Success',
  props<{ listOfCitys: CityList }>(),
);

export const loadGroupOfCitysFailed = createAction(
  '[Weather API] Load Group Of Citys Failed',
);