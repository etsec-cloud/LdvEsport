import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BracketComponent } from "./component/bracket/bracket.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "bracket", component: BracketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
