import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundIconButtonComponent } from './components/round-icon-button/round-icon-button.component';
import { AddImagesComponent } from './components/add-images/add-images.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    RoundIconButtonComponent,
    AddImagesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    RoundIconButtonComponent,
    AddImagesComponent,
  ]
})
export class SharedModule { }
