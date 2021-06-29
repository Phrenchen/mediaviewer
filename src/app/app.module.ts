import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { TopCommentComponent } from './components/top-comment/top-comment.component';
import { FileLoaderModule } from './modules/file-loader/file-loader.module';
import { ThemeSwitchModule } from './modules/theme-switch/theme-switch.module';
import { ToggleAnythingModule } from './modules/toggle-anything/toggle-anything.module';
import { UserFileListModule } from './modules/user-file-list/user-file-list.module';

@NgModule({
  declarations: [
    AppComponent,
    // DropZoneComponent,
    // DndDirective,
    // FileListComponent,
    // MediaItemComponent,
    // GridConfiguratorComponent,
    StartComponent,
    TopCommentComponent,
  ],
  imports: [
    BrowserModule,
    ThemeSwitchModule,
    FileLoaderModule,
    UserFileListModule,
    ToggleAnythingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
