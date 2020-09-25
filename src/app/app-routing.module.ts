import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConnexionComponent } from "./component/account/connexion/connexion.component";
import { InscriptionComponent } from "./component/account/inscription/inscription.component";

const routes: Routes = [
  { path: "connexion", component: ConnexionComponent },
  { path: "inscription", component: InscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
