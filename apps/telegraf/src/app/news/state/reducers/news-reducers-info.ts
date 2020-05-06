import { createFeatureSelector } from '@ngrx/store';

import { NewsState } from './news.reducer';

export const newsFeatureName = 'news';

export const getNewsState = createFeatureSelector<NewsState>(
  newsFeatureName
);
