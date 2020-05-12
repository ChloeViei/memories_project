import { Action, createAction, props } from "@ngrx/store";
import { Memories } from "../../../model/memories.model";
import { Memory } from "../../../model/memory";

export enum memoriesActionsTypes {
  CREATE_MEMORY = '[memories] Create memory',
  CREATE_MEMORY_ERROR = '[memories] Create memory error',
  CREATE_MEMORY_SUCCESS = '[memories] Create memory success',
  LOAD_MEMORIES = '[memories] Load memories',
  LOAD_MEMORIES_ERROR = '[memories] Load memories error',
  LOAD_MEMORIES_SUCCESS = '[memories] Load memories success',
  REMOVE_MEMORY = '[memories] Remove memory',
  REMOVE_MEMORY_ERROR = '[memories] Remove memory error',
  REMOVE_MEMORY_SUCCESS = '[memories] Remove memory success'
}

export const actionMemoriesUpsertOne = createAction(
  "[Memories] Upsert One",
  props<{ memory: Memories }>()
);

export const actionMemoriesDeleteOne = createAction(
  "[Memories] Delete One",
  props<{ id: string }>()
);

export class CreateMemoryAction implements Action {
  readonly type = memoriesActionsTypes.CREATE_MEMORY;
  constructor(public payload: { memory: Memory }) {}
}

export class CreateMemoryErrorAction implements Action {
  readonly type = memoriesActionsTypes.CREATE_MEMORY_ERROR;
  constructor(public payload: { error: Error }) {}
}

export class CreateMemorySuccessAction implements Action {
  readonly type = memoriesActionsTypes.CREATE_MEMORY_SUCCESS;

  constructor(public payload: { memory: unknown }) {}
}

export class LoadMemoriesAction implements Action {
  readonly type = memoriesActionsTypes.LOAD_MEMORIES;
}

export class LoadMemoriesErrorAction implements Action {
  readonly type = memoriesActionsTypes.LOAD_MEMORIES_ERROR;
  constructor(public payload: { error: Error }) {}
}

export class LoadMemoriesSuccessAction implements Action {
  readonly type = memoriesActionsTypes.LOAD_MEMORIES_SUCCESS;
  constructor(public payload: { memories: Memory[] }) {}
}

export class RemoveMemoryAction implements Action {
  readonly type = memoriesActionsTypes.REMOVE_MEMORY;
  constructor(public payload: { memory: Memory }) {}
}

export class RemoveMemoryErrorAction implements Action {
  readonly type = memoriesActionsTypes.REMOVE_MEMORY_ERROR;
  constructor(public payload: { error: Error }) {}
}

export class RemoveMemorySuccessAction implements Action {
  readonly type = memoriesActionsTypes.REMOVE_MEMORY_SUCCESS;
  constructor(public payload: { memory: Memory }) {}
}


export type MemoriesActions =
  CreateMemoryAction
  | CreateMemoryErrorAction
  | CreateMemorySuccessAction
  | LoadMemoriesAction
  | LoadMemoriesErrorAction
  | LoadMemoriesSuccessAction
  | RemoveMemoryAction
  | RemoveMemoryErrorAction
  | RemoveMemorySuccessAction;
