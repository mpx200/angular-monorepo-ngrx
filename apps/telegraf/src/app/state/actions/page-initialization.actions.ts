import { createAction, union } from '@ngrx/store';

export const applicationInitialized = createAction(
  '[App] Application initialized'
);

const actions = {
  applicationInitialized
};

const pageInitializationActionsUnion = union(actions);

export type PageInitializationActionsType = typeof pageInitializationActionsUnion;

export const PageInitializationActions = actions;
