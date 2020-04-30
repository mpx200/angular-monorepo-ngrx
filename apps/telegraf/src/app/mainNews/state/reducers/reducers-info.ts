import { createFeatureSelector } from '@ngrx/store';

import { MainNewsState } from './mainNews.reducer';

export const mainNewsFeatureName = 'mainNews';

export const getMainNewsState = createFeatureSelector<MainNewsState>(
  mainNewsFeatureName
);
