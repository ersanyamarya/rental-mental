import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule, FormsModule
  ]
})
export class CoverletterModule { }
