import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  map,
  switchMap
} from 'rxjs/operators';

import { BiznisNavigationService } from '@telegraf/app/biznisNavigation/services/biznisNavigation.service';
import {
  BiznisNavigationActions,
  getBiznisNavigationContentDoneSuccessfully,
  getBiznisNavigationContentFailure
} from '@telegraf/app/biznisNavigation/state/actions/biznisNavigation.actions';

@Injectable()
export class BiznisNavigationApiEffects {
  constructor(
    private actions$: Actions,
    private biznisNavigationService: BiznisNavigationService,
  ) { }

  public getBiznisNavigationContentStarted$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(BiznisNavigationActions.getBiznisNavigationContentStarted),
      switchMap(() =>
        this.biznisNavigationService.getBiznisNavigationContent().pipe(
          map(content => getBiznisNavigationContentDoneSuccessfully({ payload: content })),
          catchError(err => of(getBiznisNavigationContentFailure({ payload: err })))
        )
      )
    )
  );

}
