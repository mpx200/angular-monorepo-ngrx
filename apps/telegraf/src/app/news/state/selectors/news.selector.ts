import { PostoviStruktura } from './../../../../../../../libs/models/src/lib/models';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState } from '@telegraf/app/state';
import { getNewsState } from '../reducers/news-reducers-info';

export const getNewsContent: MemoizedSelector<
  AppState,
  PostoviStruktura
> = createSelector(getNewsState, newsState => {
  return newsState.news;
});

