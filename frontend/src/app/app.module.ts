import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryCreateComponent } from './components/memory-create/memory-create.component';
import { MemoryEditComponent } from './components/memory-edit/memory-edit.component';
import { MemoryListComponent } from './components/memory-list/memory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryCreateComponent,
    MemoryEditComponent,
    MemoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
