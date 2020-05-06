import { PostoviStruktura } from './../../../../../../../libs/models/src/lib/models';
import { createAction, props, union } from '@ngrx/store';

export const getNewsContentStarted = createAction('[News] Get news content start');

export const getNewsContentDoneSuccessfully = createAction(
  '[News] Get news content finished',
  props<PostoviStruktura>()
);

export const getNewsContentFailure = createAction(
  '[News] Get news content failure',
  props<{ payload: any }>()
);

const actions = {
  getNewsContentStarted,
  getNewsContentDoneSuccessfully,
  getNewsContentFailure
};

const newsUnion = union(actions);

export type NewsActionsType = typeof newsUnion;

export const NewsActions = actions;
