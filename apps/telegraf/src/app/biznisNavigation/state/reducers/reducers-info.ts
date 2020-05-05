import { createFeatureSelector } from '@ngrx/store';

import { BiznisNavigationState } from './biznisNavigation.reducer';

export const biznisNavigationFeatureName = 'biznisNavigation';

export const getBiznisNavigationState = createFeatureSelector<BiznisNavigationState>(
  biznisNavigationFeatureName
);
