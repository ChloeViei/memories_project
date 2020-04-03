import { EntityState } from "@ngrx/entity";

export interface Memory {
  id: string;
  title: string;
  author: string;
  text: string;
}

export interface MemoryState extends EntityState<Memory> {}
