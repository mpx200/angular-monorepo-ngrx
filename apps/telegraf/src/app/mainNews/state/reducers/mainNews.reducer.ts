import { Action, createReducer, on } from '@ngrx/store';
import { MainNewsActions } from '../actions/mainNews.actions';
import { Popularno } from '@a-m-ngrx/models';

export interface MainNewsState {
  mainNews: Popularno[];
  errorMessage: string | null;
}

export const initialState: MainNewsState = {
  mainNews: null,
  errorMessage: null
};

const reducer = createReducer(
  initialState,
  on(MainNewsActions.getMainNewsContentDoneSuccessfully, (state, { payload }) => ({
    ...state,
    mainNews: payload,
    errorMessage: null
  })),

  on(MainNewsActions.getMainNewsContentStarted, state => ({
    ...state,
    initialState
  })),
  on(MainNewsActions.getMainNewsContentFailure, (state, { payload }) => ({
    ...state,
    errorMessage: payload
  })),

);

export function mainNewsReducer(
  state: MainNewsState | undefined,
  action: Action
): MainNewsState {
  return reducer(state, action);
}
