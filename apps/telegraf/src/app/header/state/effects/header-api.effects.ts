import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  map,
  switchMap
} from 'rxjs/operators';

import { HeaderService } from '@telegraf/app/header/services';
import {
  HeaderActions,
  getHeaderContentDoneSuccessfully,
  getHeaderContentFailure
} from '@telegraf/app/header/state/actions/header.actions';

@Injectable()
export class HeaderApiEffects {
  constructor(
    private actions$: Actions,
    private headerService: HeaderService,
  ) { }

  public getHeaderContentStarted$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(HeaderActions.getHeaderContentStarted),
      switchMap(() =>
        this.headerService.getHeaderContent().pipe(
          map(content => getHeaderContentDoneSuccessfully(content)),
          catchError(err => of(getHeaderContentFailure({ payload: err })))
        )
      )
    )
  );

}
