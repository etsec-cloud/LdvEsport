import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  setMyStyle() {
    let styles = {
      background: "grey",
    };
    return styles;
  }

  setMyStyle2() {
    let styles = {
      "background-image":
        "linear-gradient(to right top, #5c5c5c, #6d6d6d, #7e7e7e, #8f8f8f, #a1a1a1)",
    };
    return styles;
  }
}
