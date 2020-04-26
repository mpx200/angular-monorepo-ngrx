import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  map,
  switchMap
} from 'rxjs/operators';

import { FooterService } from '@telegraf/app/footer/services';
import {
  FooterActions,
  getFooterContentDoneSuccessfully,
  getFooterContentFailure
} from '@telegraf/app/footer/state/actions/footer.actions';

@Injectable()
export class FooterApiEffects {
  constructor(
    private actions$: Actions,
    private footerService: FooterService,
  ) { }

  public getFooterContentStarted$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FooterActions.getFooterContentStarted),
      switchMap(() =>
        this.footerService.getFooterContent().pipe(
          map(content => getFooterContentDoneSuccessfully(content)),
          catchError(err => of(getFooterContentFailure({ payload: err })))
        )
      )
    )
  );

}
