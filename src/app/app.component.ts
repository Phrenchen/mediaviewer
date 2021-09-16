import { Component } from '@angular/core';
import { FileService } from './modules/file-loader/services/file.service';
import { UiService } from './modules/shared/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showDropzone: boolean = true;
  public fileCount = 0;

  constructor(public readonly fileService: FileService, public readonly uiService: UiService) {

    this.fileService.files$.subscribe(files => {
      this.fileCount = files.length;
      // if(this.fileCount === 0) {
        // this.showUI = this.fileCount > 0;
      // }
      this.showDropzone = this.fileCount === 0;

      this.uiService.showUi(this.fileCount > 0);
    });
  }

  public updateUi(value: boolean): void {
    this.uiService.showUi(value);
  }
}
