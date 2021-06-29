import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropZoneComponent } from './components/drop-zone/drop-zone.component';
import { DndDirective } from 'src/app/modules/file-loader/directives/dnd.directive';
import { FileListComponent } from './components/file-list/file-list.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { GridConfiguratorComponent } from './components/grid-configurator/grid-configurator.component';

@NgModule({
  declarations: [
    DropZoneComponent,
    DndDirective,
    FileListComponent,
    MediaItemComponent,
    GridConfiguratorComponent,
  ],
  imports: [CommonModule],
  exports: [
    DropZoneComponent,
    DndDirective,
    FileListComponent,
    MediaItemComponent,
    GridConfiguratorComponent,
  ],
})
export class FileLoaderModule {}
