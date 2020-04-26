import { ActionReducer } from '@ngrx/store';
import { AppState } from '..';



// console.log all actions and state after
export function loggerMetaReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return (state: AppState, action: any): AppState => {
    console.log('action', action);

    const stateAfter = reducer(state, action);

    console.log('state after', stateAfter);

    return stateAfter;
  };
}
