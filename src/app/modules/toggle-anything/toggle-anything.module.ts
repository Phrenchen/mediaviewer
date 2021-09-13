import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleAnythingComponent } from './toggle-anything/toggle-anything.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ToggleAnythingComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    ToggleAnythingComponent
  ]
})
export class ToggleAnythingModule { }
