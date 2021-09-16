import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleAnythingComponent } from './toggle-anything/toggle-anything.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ToggleAnythingComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ToggleAnythingComponent
  ]
})
export class ToggleAnythingModule { }
