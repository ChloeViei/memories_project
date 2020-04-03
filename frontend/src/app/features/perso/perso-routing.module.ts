import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExamplesComponent } from "./examples.component";
import { MemoriesComponent } from "./components/memories.component";

const routes: Routes = [
  {
    path: "",
    component: ExamplesComponent,
    children: [
      {
        path: "",
        redirectTo: "memories",
        pathMatch: "full"
      },
      {
        path: "memories",
        redirectTo: "memories/",
        pathMatch: "full"
      },
      {
        path: "memories/:id",
        component: MemoriesComponent,
        data: { title: "trans.menu.perso.memories" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersoRoutingModule {}
