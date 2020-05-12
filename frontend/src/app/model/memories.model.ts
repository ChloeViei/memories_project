import { EntityState } from '@ngrx/entity';

export interface Memories {
  id: string;
  title: string;
  author: string;
  text: string;
}

export interface MemoryState extends EntityState<Memories> {}
