import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap, withLatestFrom } from "rxjs/operators";

import { LocalStorageService } from "../../../core/core.module";

import { State } from "../perso.state";
import {
  actionMemoriesDeleteOne,
  actionMemoriesUpsertOne
} from "./memories.actions";
import { selectMemories } from "./memories.selectors";

export const MEMORIES_KEY = "PERSO_MEMORIES";

@Injectable()
export class MemoriesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {}

  persistMemories = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionMemoriesUpsertOne, actionMemoriesDeleteOne),
        withLatestFrom(this.store.pipe(select(selectMemories))),
        tap(([actions, memoriesState]) =>
          this.localStorageService.setItem(MEMORIES_KEY, memoriesState)
        )
      ),
    { dispatch: false }
  );
}
