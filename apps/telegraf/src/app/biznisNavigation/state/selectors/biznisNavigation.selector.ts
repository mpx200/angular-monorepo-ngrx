import { createSelector, MemoizedSelector } from '@ngrx/store';
import { getBiznisNavigationState } from '../reducers';
import { AppState } from '@telegraf/app/state';
import { Popularno } from '@a-m-ngrx/models';

export const getBiznisNavigationContent: MemoizedSelector<
  AppState,
  Popularno[]
> = createSelector(getBiznisNavigationState, biznisNavigationState => {
  return biznisNavigationState.biznisNavigation;
});
