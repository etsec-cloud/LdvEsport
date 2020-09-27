import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConnexionComponent } from "./component/account/connexion/connexion.component";
import { InscriptionComponent } from "./component/account/inscription/inscription.component";
import { BracketComponent } from "./component/bracket/bracket.component";
import { MatchComponent } from "./component/match/match.component";

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    MatchComponent,
    BracketComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
