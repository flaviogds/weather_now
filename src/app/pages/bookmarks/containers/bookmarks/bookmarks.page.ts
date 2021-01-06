import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityList } from 'src/app/shared/models/weather.model';
import { Units } from 'src/app/shared/models/units.enum';

import { BookmarksState } from '../../state/bookmarks.reducer';
import * as fromBookmarksSelectors from '../../state/bookmarks.selectors';
import * as fromBookmarksActions from '../../state/bookmarks.actions';
import * as fromConfigSelectors from '../../../../shared/state/config/config.selectors';

@Component({
  selector: 'wn-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss']
})
export class BookmarksPage implements OnInit, OnDestroy {

  bookmarksList$: Observable<Bookmark[]>;
  bookmarksList: Bookmark[] = [];
  listOfCitys$: Observable<CityList>;
  unit$: Observable<Units>;
  
  private componentDestroyed$ = new Subject();

  constructor(private store: Store<BookmarksState>) {
  }

  ngOnInit() {
    this.bookmarksList$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));

    this.bookmarksList$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value: any) => this.bookmarksList = value);

    this.store.dispatch(fromBookmarksActions.loadGroupOfCitys(
      {
        list: this.bookmarksList.map(d => d.id.toString()),
      }
    ));

    this.listOfCitys$ = this.store.pipe(select(fromBookmarksSelectors.selectCityList));
    this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  removeBookmark(id: number) {
    this.store.dispatch(fromBookmarksActions.removeBookmark({ id }));
  }
}