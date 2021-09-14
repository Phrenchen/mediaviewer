import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleAnythingComponent } from './toggle-anything/toggle-anything.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ToggleAnythingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ToggleAnythingComponent
  ]
})
export class ToggleAnythingModule { }
