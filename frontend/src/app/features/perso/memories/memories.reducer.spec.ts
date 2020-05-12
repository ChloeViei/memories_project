import { MemoryState } from "../../../model/memories.model";
import { memoryReducer, initialState } from "./memories.reducer";
import {
  actionMemoriesDeleteOne,
  actionMemoriesUpsertOne
} from "./memories.actions";

describe("BookReducer", () => {
  const TEST_INITIAL_STATE: MemoryState = {
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
  };

  it("should return the default state", () => {
    const action = {} as any;
    const state = memoryReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it("should add a memory", () => {
    const action = actionMemoriesUpsertOne({
      memory: {
        id: "1234",
        title: "test",
        author: "test",
        text: "test"
      }
    });
    const state = memoryReducer(TEST_INITIAL_STATE, action);

    expect(state.ids.length).toEqual(2);
    expect(state.entities["1234"].title).toEqual("test");
  });

  it("should update a memory", () => {
    const id = TEST_INITIAL_STATE.ids[0] as string;
    const action = actionMemoriesUpsertOne({
      memory: {
        id: id,
        title: "updated",
        author: "updated",
        text: "updated"
      }
    });

    const state = memoryReducer(TEST_INITIAL_STATE, action);
    expect(state.entities[id]).toEqual(
      jasmine.objectContaining({
        title: "updated",
        author: "updated",
        text: "updated"
      })
    );
  });

  it("should remove a memory", () => {
    const id = TEST_INITIAL_STATE.ids[0] as string;
    const action = actionMemoriesDeleteOne({ id });
    const state = memoryReducer(TEST_INITIAL_STATE, action);
    expect(state.entities[id]).toBe(undefined);
  });
});
