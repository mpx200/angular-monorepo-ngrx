import { createFeatureSelector } from '@ngrx/store';

import { FooterState } from './footer.reducer';

export const footerFeatureName = 'footer';

export const getFooterState = createFeatureSelector<FooterState>(
  footerFeatureName
);
