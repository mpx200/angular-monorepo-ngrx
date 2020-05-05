import { createSelector, MemoizedSelector } from '@ngrx/store';
import { getMainNewsState } from '../reducers';
import { AppState } from '@telegraf/app/state';
import { Popularno } from '@a-m-ngrx/models';

export const getMainNewsContent: MemoizedSelector<
  AppState,
  Popularno[]
> = createSelector(getMainNewsState, mainNewsState => {
  return mainNewsState.mainNews;
});
