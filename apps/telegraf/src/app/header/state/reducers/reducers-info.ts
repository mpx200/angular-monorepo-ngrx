import { createFeatureSelector } from '@ngrx/store';

import { HeaderState } from './header.reducer';

export const headerFeatureName = 'header';

export const getHeaderState = createFeatureSelector<HeaderState>(
  headerFeatureName
);
