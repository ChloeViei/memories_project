import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import {CoreModule, MemoriesService} from "./core/core.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {StoreModule} from "@ngrx/store";
import { reducers } from './app.reducers';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core
    CoreModule,

    // app
    AppRoutingModule,

    // // store
    // StoreModule.forRoot(reducers)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MemoriesService]
})
export class AppModule {}
