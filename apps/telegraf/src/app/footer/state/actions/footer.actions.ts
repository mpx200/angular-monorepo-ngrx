import { createAction, props, union } from '@ngrx/store';
import { Redakcija } from '@a-m-ngrx/models';

export const getFooterContentStarted = createAction('[Footer] Get footer content start');

export const getFooterContentDoneSuccessfully = createAction(
  '[Footer] Get footer content finished',
  props<Redakcija>()
);

export const getFooterContentFailure = createAction(
  'Footer] Get footer content failure',
  props<{ payload: any }>()
);

const actions = {
  getFooterContentStarted,
  getFooterContentDoneSuccessfully,
  getFooterContentFailure
};

const footerUnion = union(actions);

export type FooterActionsType = typeof footerUnion;

export const FooterActions = actions;
