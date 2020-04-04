import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";

import { Memory, MemoryState } from "../model/memories.model";
import { actionMemoriesDeleteOne, actionMemoriesUpsertOne } from "./memories.actions";
import { Action, createReducer, on } from "@ngrx/store";

export function sortByTitle(a: Memory, b: Memory): number {
  return a.title.localeCompare(b.title);
}

export const memoryAdapter: EntityAdapter<Memory> = createEntityAdapter<Memory>(
  {
    sortComparer: sortByTitle
  }
);

export const initialState: MemoryState = memoryAdapter.getInitialState({
  ids: ["123"],
  entities: {
    "123": {
      id: "123",
      title: "Reactive Programming with Angular and ngrx",
      author: "Oren Farhi",
      text:
        "Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions"
    }
  }
});

const reducer = createReducer(
  initialState,
  on(actionMemoriesUpsertOne, (state, { memory }) =>
    memoryAdapter.upsertOne(memory, state)
  ),
  on(actionMemoriesDeleteOne, (state, { id }) =>
    memoryAdapter.removeOne(id, state)
  )
);

export function memoryReducer(state: MemoryState | undefined, action: Action) {
  return reducer(state, action);
}
