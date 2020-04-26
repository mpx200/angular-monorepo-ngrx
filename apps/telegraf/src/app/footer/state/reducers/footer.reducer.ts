import { Action, createReducer, on } from '@ngrx/store';
import { FooterActions } from '../actions/footer.actions';
import { Redakcija } from '@a-m-ngrx/models';




export interface FooterState {
  footer: Redakcija;
  errorMessage: string | null;
}

export const initialState: FooterState = {
  footer: null,
  errorMessage: null
};

const reducer = createReducer(
  initialState,
  on(FooterActions.getFooterContentDoneSuccessfully, (state, payload) => ({
    ...state,
    footer: payload,
    errorMessage: null
  })),

  on(FooterActions.getFooterContentStarted, state => ({
    ...state,
    initialState
  })),
  on(FooterActions.getFooterContentFailure, (state, { payload }) => ({
    ...state,
    errorMessage: payload
  })),

);

export function footerReducer(
  state: FooterState | undefined,
  action: Action
): FooterState {
  return reducer(state, action);
}
