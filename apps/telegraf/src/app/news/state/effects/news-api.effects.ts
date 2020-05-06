import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NewsService } from '../../services';
import { Observable, of } from 'rxjs';
import {
  NewsActions,
  getNewsContentDoneSuccessfully,
  getNewsContentFailure
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class NewsApiEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}

  public getNewsContentStarted$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActions.getNewsContentStarted),
      switchMap(() =>
        this.newsService.getNewsContent().pipe(
          map(content => getNewsContentDoneSuccessfully(content)),
          catchError(err => of(getNewsContentFailure({ payload: err })))
        )
      )
    )
  );
}
