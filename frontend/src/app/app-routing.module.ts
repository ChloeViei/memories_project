import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MemoryCreateComponent} from "./components/memory-create/memory-create.component";
import {MemoryEditComponent} from "./components/memory-edit/memory-edit.component";
import {MemoryListComponent} from "./components/memory-list/memory-list.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-memory', component: MemoryCreateComponent },
  { path: 'edit-memory/:id', component: MemoryEditComponent },
  { path: 'memories-list', component: MemoryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
