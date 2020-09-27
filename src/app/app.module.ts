import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccountComponent } from "./component/account/account.component";
import { BracketComponent } from "./component/bracket/bracket.component";
import { MatchComponent } from "./component/match/match.component";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    BracketComponent,
    MatchComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
