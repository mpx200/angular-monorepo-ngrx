import { Action, createReducer, on } from '@ngrx/store';
import { HeaderActions } from '../actions/header.actions';
import { TelegrafStruktura } from '@a-m-ngrx/models';

export interface HeaderState {
  header: TelegrafStruktura;
  errorMessage: string | null;
}

export const initialState: HeaderState = {
  header: null,
  errorMessage: null
};

const reducer = createReducer(
  initialState,
  on(HeaderActions.getHeaderContentDoneSuccessfully, (state, payload) => ({
    ...state,
    header: payload,
    errorMessage: null
  })),

  on(HeaderActions.getHeaderContentStarted, state => ({
    ...state,
    initialState
  })),
  on(HeaderActions.getHeaderContentFailure, (state, { payload }) => ({
    ...state,
    errorMessage: payload
  })),

);

export function headerReducer(
  state: HeaderState | undefined,
  action: Action
): HeaderState {
  return reducer(state, action);
}
