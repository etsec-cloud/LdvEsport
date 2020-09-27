import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.scss"],
})
export class InscriptionComponent implements OnInit {
  profileForm: FormGroup;

  ngOnInit() {
    this.profileForm = new FormGroup({
      Pseudo: new FormControl("", Validators.required),
      GamePlayed: new FormArray([new FormControl("", Validators.required)]),
      Rank: new FormArray([new FormControl("")]),
      Age: new FormControl("", Validators.required),
      Team: new FormControl(""),
      Password: new FormControl("", Validators.required),
    });
  }

  onSubmit() {}
  constructor(private fb: FormBuilder) {}

  addGame(): void {
    (<FormArray>this.profileForm.get("GamePlayed")).push(new FormControl(""));
  }
  addRank(): void {
    (<FormArray>this.profileForm.get("Rank")).push(new FormControl(""));
  }
}
