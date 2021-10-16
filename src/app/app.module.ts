import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileLoaderModule } from './modules/file-loader/file-loader.module';
import { ThemeSwitchModule } from './modules/theme-switch/theme-switch.module';
import { ToggleAnythingModule } from './modules/toggle-anything/toggle-anything.module';
import { UserFileListModule } from './modules/user-file-list/user-file-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './components/settings/settings.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from './modules/shared/shared.module';
import {MultiStateMenuModule} from './modules/multi-state-menu/multi-state-menu.module';
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,
    ThemeSwitchModule,
    FileLoaderModule,
    UserFileListModule,
    ToggleAnythingModule,
    MultiStateMenuModule,



    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
