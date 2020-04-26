
import { loggerMetaReducer } from './logger.meta-reducer';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { environment } from 'apps/telegraf/src/environments/environment';


/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const appMetaReducers = !environment.production
  ? [loggerMetaReducer]
  : [];
