import { createAction, props, union } from '@ngrx/store';
import { TelegrafStruktura, Kategorije } from '@a-m-ngrx/models';

export const getHeaderContentStarted = createAction('[Header] Get header content start');

export const getHeaderContentDoneSuccessfully = createAction(
  '[Header] Get header content finished',
  props<TelegrafStruktura>()
);

export const getHeaderContentFailure = createAction(
  '[Header] Get header content failure',
  props<{ payload: any }>()
);

const actions = {
  getHeaderContentStarted,
  getHeaderContentDoneSuccessfully,
  getHeaderContentFailure
};

const headerUnion = union(actions);

export type HeaderActionsType = typeof headerUnion;

export const HeaderActions = actions;
