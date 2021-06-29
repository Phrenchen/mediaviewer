import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleAnythingComponent } from './toggle-anything/toggle-anything.component';



@NgModule({
  declarations: [ToggleAnythingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleAnythingComponent
  ]
})
export class ToggleAnythingModule { }
