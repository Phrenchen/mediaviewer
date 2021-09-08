import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/modules/file-loader/services/file.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public readonly fileService: FileService) { }

  ngOnInit(): void {
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
