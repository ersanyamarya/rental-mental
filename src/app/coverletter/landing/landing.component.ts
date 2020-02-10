import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  name = "Mr Xyz";
  daytime = "evening";
  rooms = 2;
  location = "Hansallee";
  constructor() {}

  ngOnInit(): void {}
}
