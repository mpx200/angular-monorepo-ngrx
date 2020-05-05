import { Action, createReducer, on } from '@ngrx/store';
import { BiznisNavigationActions } from '../actions/biznisNavigation.actions';
import { BiznisNavigation } from '@a-m-ngrx/models';

export interface BiznisNavigationState {
  biznisNavigation: BiznisNavigation[];
  errorMessage: string | null;
}

export const initialState: BiznisNavigationState = {
  biznisNavigation: null,
  errorMessage: null
};

const reducer = createReducer(
  initialState,
  on(BiznisNavigationActions.getBiznisNavigationContentDoneSuccessfully,
     (state, { payload }) => ({
    ...state,
    biznisNavigation: payload,
    errorMessage: null
  })),

  on(BiznisNavigationActions.getBiznisNavigationContentStarted, state => ({
    ...state,
    initialState
  })),
  on(BiznisNavigationActions.getBiznisNavigationContentFailure, (state, { payload }) => ({
    ...state,
    errorMessage: payload
  })),

);

export function biznisNavigationReducer(
  state: BiznisNavigationState | undefined,
  action: Action
): BiznisNavigationState {
  return reducer(state, action);
}
