import { createAction, props } from "@ngrx/store";
import { Memory } from "../model/memories.model";

export const actionMemoriesUpsertOne = createAction(
  "[Memories] Upsert One",
  props<{ memory: Memory }>()
);

export const actionMemoriesDeleteOne = createAction(
  "[Memories] Delete One",
  props<{ id: string }>()
);
