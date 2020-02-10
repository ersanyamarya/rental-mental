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
  full_text = ``;
  constructor() {
    // this.updateFullText();
  }
  updateFullText() {
    this.full_text = `
    Good ${this.daytime} ${this.name},
      My name is Sanyam Arya and I am very interested in the advertised
      ${this.rooms}-room apartment on ${this.location}. I am 27 years old Software
      Engineer. I began to work with Trivago from 1st of February 2020, and my
      workplace is in Niederkassel, the neighbourhood of the apartment is,
      therefore, comprehensive for me. I would be happy to provide you with my
      new employment contract. However, it is my first job here so I'll not be
      able to produce SCHUFA information. If you need any more documents, please
      let me know.

      I am dependable and trustworthy. I will take good care of the apartment.
      In my last home in India, I had a wooden floor, as can be seen in the
      pictures. So I already have experience with special care. If you have any
      questions about me, you can best reach me on +491703380307 between 5 pm
      and 9 pm or by e-mail (sanyam.arya@trivago.com). I am currently in
      Hansallee and can directly come to visit every weekday from 6 p.m and
      anytime on weekends.

      You can find more information about me on my LinkedIn profile:
      www.linkedin.com/in/sanyam-arya. I wish you a nice day and will be very
      happy if I get the chance to visit it.
    
      Thank you for your time, ${this.name}.
      Best wishes,
      Sanyam Arya
    `;
  }
  ngOnInit(): void {}
}
