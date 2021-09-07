import { Component } from '@angular/core';
import { FileService } from './modules/file-loader/services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showUI: boolean = true;

  constructor(public readonly fileService: FileService) {
  }

  public fileBrowserHandler(event: any): void {
    this.updateFiles([...event.target.files]);
  }

  public onFilesDropped(files: any[]): void {
    this.updateFiles([...files]);
  }

  private updateFiles(files: any[]): void {
    this.fileService.updateFiles(files);
  }


}
