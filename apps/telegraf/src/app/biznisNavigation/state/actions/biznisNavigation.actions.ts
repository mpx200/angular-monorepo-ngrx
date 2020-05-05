import { createAction, props, union } from '@ngrx/store';
import { Popularno } from '@a-m-ngrx/models';

export const getBiznisNavigationContentStarted = createAction(
  '[biznisNavigation] Get biznisNavigation content start'
);

export const getBiznisNavigationContentDoneSuccessfully = createAction(
  '[biznisNavigation] Get biznisNavigation content finished',
  props<{ payload: Popularno[] }>()
);

export const getBiznisNavigationContentFailure = createAction(
  '[biznisNavigation] Get biznisNavigation content failure',
  props<{ payload: any }>()
);

const actions = {
  getBiznisNavigationContentStarted,
  getBiznisNavigationContentDoneSuccessfully,
  getBiznisNavigationContentFailure
};

const biznisNavigationUnion = union(actions);

export type BiznisNavigationActionsType = typeof biznisNavigationUnion;

export const BiznisNavigationActions = actions;
