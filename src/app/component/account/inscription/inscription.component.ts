import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.scss"],
})
export class InscriptionComponent {
  profileForm = new FormGroup({
    Pseudo: new FormControl(""),
    InformationGame: new FormGroup({
      GamePlayed: new FormControl([""]),
      Rank: new FormControl([""]),
    }),
    Age: new FormControl(""),
    Team: new FormControl(""),
  });

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Nancy",
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
