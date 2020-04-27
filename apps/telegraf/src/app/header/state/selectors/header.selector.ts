import { createSelector, MemoizedSelector } from '@ngrx/store';

import { AppState } from '@telegraf/app/state';
import { TelegrafStruktura } from '@a-m-ngrx/models';
import { getHeaderState } from '../reducers/reducers-info';

export const getHeaderContent: MemoizedSelector<
  AppState,
  TelegrafStruktura
> = createSelector(getHeaderState, headerState => {
  return headerState.header;
});

