import * as assert from "assert";
import { Store } from "@ngrx/store";
import { EMPTY, of } from "rxjs";
import { TestScheduler } from "rxjs/testing";

import { LocalStorageService } from "../../../core/core.module";

import { MemoryState } from "../../../model/memories.model";
import { Actions, getEffectsMetadata } from "@ngrx/effects";
import { MemoriesEffects, MEMORIES_KEY } from "./memories.effects";
import {
  actionMemoriesDeleteOne,
  actionMemoriesUpsertOne
} from "./memories.actions";

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe("MemoriesEffects", () => {
  describe("persistMemories", () => {
    const memoriesState: MemoryState = {
      entities: {
        "1": {
          author: "Author",
          text: "Text",
          id: "1",
          title: "Title"
        }
      },
      ids: ["1"]
    };
    let localStorage: LocalStorageService;
    let store: Store<any>;

    beforeEach(() => {
      localStorage = jasmine.createSpyObj("localStorage", ["setItem"]);
      store = of({
        examples: {
          memories: memoriesState
        }
      }) as any;
    });

    it("should not dispatch any actions", () => {
      const actions = new Actions(EMPTY);
      const effects = new MemoriesEffects(actions, store, localStorage);
      const metadata = getEffectsMetadata(effects);

      expect(metadata.persistMemories.dispatch).toEqual(false);
    });

    it("should call setItem on LocalStorageService for delete one action", () => {
      scheduler.run(helpers => {
        const { cold } = helpers;
        const action = actionMemoriesDeleteOne({ id: "1" });
        const source = cold("a", { a: action });
        const actions = new Actions(source);
        const effects = new MemoriesEffects(actions, store, localStorage);

        effects.persistMemories.subscribe(() => {
          expect(localStorage.setItem).toHaveBeenCalledWith(
            MEMORIES_KEY,
            memoriesState
          );
        });
      });
    });

    it("should call setItem on LocalStorageService for upsert one action", () => {
      scheduler.run(helpers => {
        const { cold } = helpers;
        const action = actionMemoriesUpsertOne({ memory: {} as any });
        const source = cold("a", { a: action });
        const actions = new Actions(source);
        const effects = new MemoriesEffects(actions, store, localStorage);

        effects.persistMemories.subscribe(() => {
          expect(localStorage.setItem).toHaveBeenCalledWith(
            MEMORIES_KEY,
            memoriesState
          );
        });
      });
    });
  });
});
