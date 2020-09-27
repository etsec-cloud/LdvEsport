import { Component } from "@angular/core";

@Component({
  selector: "app-bracket",
  templateUrl: "./bracket.component.html",
  styleUrls: ["./bracket.component.scss"]
})
export class BracketComponent {
  matchsList: [];
  generateMatch() {
    this.matchsList.push("push");
    console.log(this.matchsList);
  }
}
