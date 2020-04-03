import { createSelector } from "@ngrx/store";

import { selectRouterState } from "../../../core/core.module";
import { selectPerso, PersoState } from "../perso.state";

import { memoryAdapter } from "./memories.reducer";

const { selectEntities, selectAll } = memoryAdapter.getSelectors();

export const selectMemories = createSelector(
  selectPerso,
  (state: PersoState) => state.memories
);

export const selectAllMemories = createSelector(selectMemories, selectAll);
export const selectMemoriesEntities = createSelector(
  selectMemories,
  selectEntities
);

export const selectSelectedMemory = createSelector(
  selectMemoriesEntities,
  selectRouterState,
  (entities, params) => params && entities[params.state.params.id]
);
