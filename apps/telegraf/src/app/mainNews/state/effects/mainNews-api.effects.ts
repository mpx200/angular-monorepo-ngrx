import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  map,
  switchMap
} from 'rxjs/operators';

import { MainNewsService } from '@telegraf/app/mainNews/services/mainNews.service';
import {
  MainNewsActions,
  getMainNewsContentDoneSuccessfully,
  getMainNewsContentFailure
} from '@telegraf/app/mainNews/state/actions/mainNews.actions';

@Injectable()
export class MainNewsApiEffects {
  constructor(
    private actions$: Actions,
    private mainNewsService: MainNewsService,
  ) { }

  public getMainNewsContentStarted$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(MainNewsActions.getMainNewsContentStarted),
      switchMap(() =>
        this.mainNewsService.getMainNewsContent().pipe(
          map(content => getMainNewsContentDoneSuccessfully({ payload: content })),
          catchError(err => of(getMainNewsContentFailure({ payload: err })))
        )
      )
    )
  );

}
