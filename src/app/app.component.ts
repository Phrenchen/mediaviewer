import { Component } from '@angular/core';
import { FileService } from './modules/file-loader/services/file.service';
import { UiService } from './modules/shared/services/ui.service';
import {MultiStateMenuService} from './modules/multi-state-menu/services/multi-state-menu.service';
import {MainMenuState} from './interfaces/MainMenuState';
import {AppService} from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showDropzone: boolean = true;
  public fileCount = 0;

  constructor(public readonly fileService: FileService,
              public readonly appService: AppService,
              private readonly multiStateMenuService: MultiStateMenuService,
              public readonly uiService: UiService) {

    this.fileService.files$.subscribe(files => {
      this.fileCount = files.length;
      // if(this.fileCount === 0) {
        // this.showUI = this.fileCount > 0;
      // }
      this.showDropzone = this.fileCount === 0;

      // this.uiService.showUi(this.fileCount > 0);

      if (this.fileCount === 1) {
        this.multiStateMenuService.nextState(this.appService.mainMenuConfig.id, MainMenuState.SINGLE_MEDIA);
      } else if(this.fileCount > 1) {
        this.multiStateMenuService.nextState(this.appService.mainMenuConfig.id, MainMenuState.MEDIA_LIST);
      } else {
        this.multiStateMenuService.nextState(this.appService.mainMenuConfig.id, MainMenuState.NO_MEDIA);
      }
    });
  }

  // public updateMenuState(stateName: string): void {
  //   this.multiStateMenuService.nextState(this.appService.mainMenuConfig.id, stateName);
  // }

  public updateUi(value: boolean): void {
    this.uiService.showUi(value);
  }
}
