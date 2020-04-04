import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';

import { memoryReducer } from './memories/memories.reducer';
import { MemoryState } from './model/memories.model';

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
