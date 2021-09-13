import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropZoneComponent } from './components/drop-zone/drop-zone.component';
import { DndDirective } from 'src/app/modules/file-loader/directives/dnd.directive';
import { FileListComponent } from './components/file-list/file-list.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { GridConfiguratorComponent } from './components/grid-configurator/grid-configurator.component';
import { ImageEditorModule } from '../image-editor/image-editor.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DropZoneComponent,
    DndDirective,
    FileListComponent,
    MediaItemComponent,
    GridConfiguratorComponent,
  ],
  imports: [
    CommonModule,
    ImageEditorModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ],
  exports: [
    DropZoneComponent,
    DndDirective,
    FileListComponent,
    MediaItemComponent,
    GridConfiguratorComponent,
  ],
})
export class FileLoaderModule {}
