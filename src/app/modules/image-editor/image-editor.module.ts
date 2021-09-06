import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageEditorComponent } from './components/image-editor/image-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

import { SelectedItemComponent } from './components/selected-item/selected-item.component';

import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [ImageEditorComponent, SelectedItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,

    MatListModule,
    MatCheckboxModule,
    MatSliderModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,

    ColorPickerModule,
  ],
  exports: [ImageEditorComponent, SelectedItemComponent],
})
export class ImageEditorModule {}
