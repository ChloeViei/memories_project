import { v4 as uuid } from "uuid";
import { Router } from "@angular/router";
import { ApiService } from "../../../service/api.service"
import { FormBuilder } from "@angular/forms";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";

import { State } from "../perso.state";
import { Memories } from "../../../model/memories.model";
import {Memory} from "../../../model/memory";
import { MemoriesService} from "../../../core/core.module";
import { actionMemoriesDeleteOne, actionMemoriesUpsertOne } from "../memories/memories.actions";
// import { selectSelectedMemory, selectAllMemories } from "../memories/memories.selectors";

@Component({
  selector: "trans-memories",
  templateUrl: "./memories.component.html",
  styleUrls: ["./memories.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MemoriesComponent {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  memoryFormGroup = this.fb.group(MemoriesComponent.createMemory());
  memories$: Observable<Memory[]> = this.memoriesService.list();
  // selectedMemory$: Observable<Memory> = this.store.pipe(select(selectSelectedMemory));

  isEditing: boolean;

  static createMemory(): Memory {
    return {
      _id: uuid(),
      title: "",
      author: "",
      text: ""
    };
  }

  constructor(
    public store: Store<State>,
    public fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private memoriesService: MemoriesService
  ) {}

  select(memory: Memory) {
    this.isEditing = false;
    this.router.navigate(["perso/memories", memory._id]);
  }

  deselect() {
    this.isEditing = false;
    this.router.navigate(["perso/memories"]);
  }

  edit(memory: Memory) {
    this.isEditing = true;
    this.memoryFormGroup.setValue(memory);
  }

  addNew() {
    this.memoryFormGroup.reset();
    this.memoryFormGroup.setValue(MemoriesComponent.createMemory());
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  delete(memory: Memory) {
    this.store.dispatch(actionMemoriesDeleteOne({ id: memory._id }));
    this.isEditing = false;
    this.router.navigate(["perso/memories"]);
  }

  save() {
    if (this.memoryFormGroup.valid) {
      const memory = this.memoryFormGroup.value;
      this.store.dispatch(actionMemoriesUpsertOne({ memory: memory }));
      this.isEditing = false;
      this.router.navigate(["perso/memories", memory._id]);
    }
  }
}
