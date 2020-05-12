import {ActionReducer, createSelector} from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { combineReducers } from '@ngrx/store';

import * as memories from "./features/perso/memories/memories.reducer";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";

export interface State {
  memories: memories.MemoryState;
  router: RouterState;
}

export const reducers = {
  memories: memories.reducer,
  router: routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
// const productionReducer: ActionReducer<State> = combineReducers(reducers);

// export function reducer(state: any, action: any) {
//   if (environment.production) {
//     return productionReducer(state, action);
//   } else {
//     return developmentReducer(state, action);
//   }
// }

/**
 * Memories Reducers
 */
export const getMemoriesState = (state: State) => state.memories;
export const getMemories = createSelector(getMemoriesState, memories.getMemories);
