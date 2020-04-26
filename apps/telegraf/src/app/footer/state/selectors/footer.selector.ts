import { createSelector, MemoizedSelector } from '@ngrx/store';

import { getFooterState } from '../reducers';
import { AppState } from '@telegraf/app/state';
import { Redakcija } from '@a-m-ngrx/models';

export const getFooterContent: MemoizedSelector<
  AppState,
  Redakcija
> = createSelector(getFooterState, footerState => {
  return footerState.footer;
});

