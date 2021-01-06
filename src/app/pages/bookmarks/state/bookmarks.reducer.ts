import { createReducer, Action, on } from '@ngrx/store';

import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityList } from 'src/app/shared/models/weather.model';

import * as fromBookmarksActions from './bookmarks.actions';
import * as fromHomeActions from '../../home/state/home.actions';

export interface BookmarksState {
  list: Bookmark[];
  listOfCitys: CityList;
}

export const bookmarkInitialState: BookmarksState = {
  list: [],
  listOfCitys: undefined,
};

const reducer = createReducer(
  bookmarkInitialState,
  on(fromHomeActions.toggleBookmark, (state, { entity }) => ({
    ...state,
    list: toggleBookmark(state.list, entity),
  })),
  on(fromBookmarksActions.removeBookmark, (state, { id }) => ({
    ...state,
    list: state.list.filter(b => b.id !== id),
    listOfCitys: {
      cnt: state.listOfCitys.cnt - 1,
      list: state.listOfCitys.list.filter(b => b.city.id !== id)
    },
  })),
  on(fromBookmarksActions.updateBookmarksList, (state, { list }) => ({
    ...state,
    list,
  })),
  on(fromBookmarksActions.loadGroupOfCitys, state => ({
    ...state,
    listOfCitys: undefined,
  })),
  on(fromBookmarksActions.loadGroupOfCitysSuccess, (state, { listOfCitys }) => ({
    ...state,
    listOfCitys,
  })),
  on(fromBookmarksActions.loadGroupOfCitysFailed, state => ({
    ...state,
  })),
);

export function bookmarkReducer(state: BookmarksState | undefined, action: Action) {
  return reducer(state, action);
}

function toggleBookmark(list: Bookmark[], entity: Bookmark): Bookmark[] {
  if (!!list.find(bookmark => bookmark.id === entity.id)) {
    return list.filter(bookmark => bookmark.id !== entity.id);
  }
  return [...list, entity];
}