import { Injectable } from "@angular/core";
import { Action, select, Store } from "@ngrx/store";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import {catchError, concatMap, map, mergeMap, switchMap, tap, withLatestFrom} from "rxjs/operators";

import { LocalStorageService } from "../../../core/core.module";

import { State } from "../perso.state";
import { actionMemoriesDeleteOne, actionMemoriesUpsertOne, CreateMemoryErrorAction, CreateMemorySuccessAction } from "./memories.actions";
// import { selectMemories } from "./memories.selectors";
import {EMPTY, Observable, of} from "rxjs";

import { MemoriesService} from "../../../core/core.module";
import { MemoriesActions, memoriesActionsTypes } from "./memories.actions";

export const MEMORIES_KEY = "PERSO_MEMORIES";

@Injectable()
export class MemoriesEffects {

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private memoriesService: MemoriesService
  ) {}

  // constructor(
  //   private actions$: Actions,
  //   private store: Store<State>,
  //   private localStorageService: LocalStorageService,
  //   private memoriesService: MemoriesService
  // ) {}
  //
  // persistMemories = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(actionMemoriesUpsertOne, actionMemoriesDeleteOne),
  //       withLatestFrom(this.store.pipe(select(selectMemories))),
  //       tap(([actions, memoriesState]) =>
  //         this.localStorageService.setItem(MEMORIES_KEY, memoriesState)
  //       )
  //     ),
  //   { dispatch: false }
  // );


  @Effect()
  public createMemory$ = this.actions$.pipe(
    ofType(memoriesActionsTypes.CREATE_MEMORY),
    switchMap((data: any) => {
      return this.memoriesService.create(data.payload.memory).pipe(
        map(memory => {
          return {type: memoriesActionsTypes.CREATE_MEMORY_SUCCESS, payload: memory};
        }),
        catchError((error: Error) => {
          return of(memoriesActionsTypes.CREATE_MEMORY_ERROR);
        })
      );
    })
  );


  @Effect()
  loadMemories$ = this.actions$.pipe(
    ofType(memoriesActionsTypes.LOAD_MEMORIES),
    switchMap(() =>
      this.memoriesService.list().pipe(
        map(memories => {
          return { type: memoriesActionsTypes.LOAD_MEMORIES_SUCCESS, payload: memories };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
