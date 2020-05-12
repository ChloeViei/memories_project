import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";

import {Memories} from "../../../model/memories.model";
import {MemoriesActions, memoriesActionsTypes} from "./memories.actions";
import {Memory} from "../../../model/memory";
import {Action} from "@ngrx/store";

export function sortByTitle(a: Memories, b: Memories): number {
  return a.title.localeCompare(b.title);
}

export const memoryAdapter: EntityAdapter<Memory> = createEntityAdapter<Memory>(
  {
    sortComparer: sortByTitle
  }
);

export interface MemoryState {
  error?: Error,
  memory?: Memory,
  memories: Memory[];
}

export const initialState: MemoryState = {
  memories: []
};

export function reducer(state = initialState, action: MemoriesActions): MemoryState {
  switch (action.type) {

    case memoriesActionsTypes.CREATE_MEMORY:
      return { ...state, ...{
          error: undefined,
          memory: undefined
        }};

    case memoriesActionsTypes.CREATE_MEMORY_ERROR:
      return { ...state, ...{
          error: action.payload.error
        }};

    case memoriesActionsTypes.CREATE_MEMORY_SUCCESS:
      return { ...state, ...{
          memory: action.payload.memory,
          memories: (state.memories === undefined) ? [action.payload.memory] : [ ...state.memories, action.payload.memory ]
        }};

    case memoriesActionsTypes.LOAD_MEMORIES:
      return { ...state, ...{
          error: undefined,
          memories: []
        }};

    case memoriesActionsTypes.LOAD_MEMORIES_ERROR:
      return { ...state, ...{
          error: action.payload.error
        }};

    case memoriesActionsTypes.LOAD_MEMORIES_SUCCESS:
      return { ...state, ...{
          memories: action.payload.memories
        }};

    case memoriesActionsTypes.REMOVE_MEMORY:
      return { ...state, ...{
          error: undefined,
          memory: action.payload.memory
        }};

    case memoriesActionsTypes.REMOVE_MEMORY_ERROR:
      return { ...state, ...{
          error: action.payload.error
        }};

    case memoriesActionsTypes.REMOVE_MEMORY_SUCCESS:
      return { ...state, ...{
          memories: [ ...state.memories].filter(memory => memory._id !== action.payload.memory._id)
        }};

    default:
      return state;
  }
}

export const getMemories = (state: MemoryState) => state.memories;


export function memoryReducer(state: MemoryState | undefined, action: MemoriesActions) {
  return reducer(state, action);
}
