import { PostoviStruktura } from './../../../../../../../libs/models/src/lib/models';
import { Action, createReducer, on } from '@ngrx/store';
import { NewsActions } from '../actions';

export interface NewsState {
  news: PostoviStruktura;
  errorMessage: string | null;
}

export const initialState: NewsState = {
  news: null,
  errorMessage: null
};

const reducer = createReducer(
  initialState,
  on(NewsActions.getNewsContentDoneSuccessfully, (state, payload) => ({
    ...state,
    news: payload,
    errorMessage: null
  })),

  on(NewsActions.getNewsContentStarted, state => ({
    ...state,
    initialState
  })),
  on(NewsActions.getNewsContentFailure, (state, { payload }) => ({
    ...state,
    errorMessage: payload
  })),

);

export function newsReducer(
  state: NewsState | undefined,
  action: Action
): NewsState {
  return reducer(state, action);
}
