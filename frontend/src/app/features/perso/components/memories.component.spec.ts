import { RouterTestingModule } from "@angular/router/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslateModule } from "@ngx-translate/core";
import { provideMockStore, MockStore } from "@ngrx/store/testing";

import { SharedModule } from "../../../shared/shared.module";

import { MemoriesComponent } from "./memories.component";
import {
  selectAllBooks,
  selectSelectedMemory
} from "../memories/memories.selectors";

describe("CrudComponent", () => {
  let component: MemoriesComponent;
  let fixture: ComponentFixture<MemoriesComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [provideMockStore()],
      declarations: [MemoriesComponent]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectAllBooks, []);
    store.overrideSelector(selectSelectedMemory, null);
    fixture = TestBed.createComponent(MemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
