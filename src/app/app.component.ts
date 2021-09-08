import { Component } from '@angular/core';
import { FileService } from './modules/file-loader/services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showUI: boolean = false;
  public showDropzone: boolean = true;
  public fileCount = 0;

  constructor(public readonly fileService: FileService) {
    this.fileService.files$.subscribe(files => {
      console.log('currently ', files.length, 'files');
      this.fileCount = files.length;

      this.showDropzone = this.fileCount === 0;
    });
  }



}
