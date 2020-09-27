import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = ["position", "name", "points", "goal"];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  points: number;
  goal: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", points: 1.0079, goal: "123" },
  { position: 2, name: "Helium", points: 4.0026, goal: "111" },
  { position: 3, name: "Lithium", points: 6.941, goal: "102" },
  { position: 4, name: "Beryllium", points: 9.0122, goal: "95" },
  { position: 5, name: "Boron", points: 10.811, goal: "87" },
  { position: 6, name: "Carbon", points: 12.0107, goal: "78" },
  { position: 7, name: "Nitrogen", points: 14.0067, goal: "77" },
  { position: 8, name: "Oxygen", points: 15.9994, goal: "60" },
  { position: 9, name: "Fluorine", points: 18.9984, goal: "55" },
  { position: 10, name: "Neon", points: 20.1797, goal: "10" },
];
