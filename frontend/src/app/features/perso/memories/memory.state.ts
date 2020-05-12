import { Memory } from "./memory.interface";

export interface MemoryState {
  memories: Memory[];
  selectedMemory: Memory;
}

export const initialMemoryState: MemoryState = {
  memories: null,
  selectedMemory: null
};

