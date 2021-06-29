import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFileListComponent } from './components/user-file-list/user-file-list.component';
import { ToggleAnythingModule } from '../toggle-anything/toggle-anything.module';



@NgModule({
  declarations: [
    UserFileListComponent
  ],
  imports: [
    CommonModule,
    ToggleAnythingModule
  ],
  exports: [
    UserFileListComponent
  ]
})
export class UserFileListModule { }
