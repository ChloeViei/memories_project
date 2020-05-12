import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LazyElementsModule } from "@angular-extensions/elements";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { SharedModule } from "../../shared/shared.module";
import { environment } from "../../../environments/environment";

// import { FEATURE_NAME, reducers } from "./perso.state";
import { PersoRoutingModule } from "./perso-routing.module";
import { ExamplesComponent } from "./examples.component";
import { MemoriesComponent } from "./components/memories.component";
import { MemoriesEffects } from "./memories/memories.effects";
import { PersoEffects } from "./perso.effects";

import { memoryReducer } from "./memories/memories.reducer";
import {reducers, FEATURE_NAME} from "./perso.state";
import {MemoriesApi} from "../../../../../backend/src/api/memoriesApi";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/perso/`,
    ".json"
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule,
    SharedModule,
    PersoRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([PersoEffects, MemoriesEffects])
  ],
  declarations: [ExamplesComponent, MemoriesComponent],
  providers: []
})

export class PersoModule {
  constructor() {}
}
