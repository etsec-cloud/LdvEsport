import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConnexionComponent } from "./component/account/connexion/connexion.component";
import { InscriptionComponent } from "./component/account/inscription/inscription.component";
import { BracketComponent } from "./component/bracket/bracket.component";

const routes: Routes = [
  { path: "connexion", component: ConnexionComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "bracket", component: BracketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
