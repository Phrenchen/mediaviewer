import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/modules/file-loader/services/file.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public fileCount = 0;

  constructor(public readonly fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.files$.subscribe(files => {
      // console.log('file count for settings', files.length);
      this.fileCount = files.length;
    })
  }

  public fileBrowserHandler(event: any): void {
    this.updateFiles([...event.target.files]);
  }

  public onFilesDropped(files: any[]): void {
    this.updateFiles([...files]);
  }

  public resetFiles(): void {
    this.updateFiles([]);
  }

  private updateFiles(files: any[]): void {
    this.fileService.updateFiles(files);
  }


}
