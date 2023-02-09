import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemoryListComponent } from './features/memories/components/memory-list/memory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
