import { Store, select } from "@ngrx/store";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

import { MemoriesService} from "../../core/core.module";
import * as MemoriesActions from "./memories/memories.actions"

import { routeAnimations, selectIsAuthenticated } from "../../core/core.module";

import { State } from "./perso.state";

@Component({
  selector: "app-root",
  templateUrl: "./examples.component.html",
  styleUrls: ["./examples.component.scss"],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  pages = [
    { link: "memories", label: "trans.perso.menu.memories", auth: true }
  ];

  constructor(
    private memoriesService: MemoriesService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.memoriesService.list().subscribe(res => {
      this.store.dispatch(new MemoriesActions.LoadMemoriesAction())
    })
  }
}
