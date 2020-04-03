import { Store, select } from "@ngrx/store";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

import { routeAnimations, selectIsAuthenticated } from "../../core/core.module";

import { State } from "./perso.state";

@Component({
  selector: "trans",
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

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
