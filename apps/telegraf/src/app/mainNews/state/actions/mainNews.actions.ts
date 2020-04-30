import { createAction, props, union } from '@ngrx/store';
import { Popularno } from '@a-m-ngrx/models';

export const getMainNewsContentStarted = createAction(
  '[MainNews] Get main news content start'
);

export const getMainNewsContentDoneSuccessfully = createAction(
  '[MainNews] Get main news content finished',
  props<{ payload: Popularno[] }>()
);

export const getMainNewsContentFailure = createAction(
  '[MainNews] Get main news content failure',
  props<{ payload: any }>()
);

const actions = {
  getMainNewsContentStarted,
  getMainNewsContentDoneSuccessfully,
  getMainNewsContentFailure
};

const mainNewsUnion = union(actions);

export type MainNewsActionsType = typeof mainNewsUnion;

export const MainNewsActions = actions;
