import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  setMyStyle() {
    let styles = {
      "background-image":
        "repeating-linear-gradient(to bottom, #ffb100, #fc9f00, #f78c01, #f27a0a, #eb6712)",
    };
    return styles;
  }

  setMyStyle2() {
    let styles = {
      "background-image":
        "repeating-linear-gradient(to bottom, #009bff, #0084ff, #0069ff, #0048ff, #0000ff)",
    };
    return styles;
  }
}
