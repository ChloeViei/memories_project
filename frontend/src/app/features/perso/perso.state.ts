import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';

import { memoryReducer, MemoryState } from './memories/memories.reducer';


// export const FEATURE_NAME = 'perso';
// export const selectPerso = createFeatureSelector<State, PersoState>(
//   FEATURE_NAME
// );
//
// export interface MemoriesState {
//   memory: MemoryState;
// }
//
// export interface State {
//   memories: MemoriesState;
// }
//
// export const reducers: ActionReducerMap<MemoriesState> = {
//   memory: MemoryReducer
// };
//
// export interface PersoState {
//   memories: MemoryState;
// }
//
// export interface State extends AppState {
//   perso: PersoState;
// }




export const FEATURE_NAME = 'perso';
export const selectPerso = createFeatureSelector<State, PersoState>(
  FEATURE_NAME
);

export const reducers: ActionReducerMap<PersoState> = {
  memories: memoryReducer
};

export interface PersoState {
  memories: MemoryState;
}

export interface State extends AppState {
  perso: PersoState;
}

