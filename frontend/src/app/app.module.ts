import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryCreateComponent } from './components/memory-create/memory-create.component';
import { MemoryEditComponent } from './components/memory-edit/memory-edit.component';
import { MemoryListComponent } from './components/memory-list/memory-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: MemoryCreateComponent },
  { path: 'edit-employee/:id', component: MemoryEditComponent },
  { path: 'employees-list', component: MemoryListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MemoryCreateComponent,
    MemoryEditComponent,
    MemoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
