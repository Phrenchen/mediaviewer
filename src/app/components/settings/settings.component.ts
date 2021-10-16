import { Component, OnInit } from '@angular/core';
import { AssetSetEnum } from 'src/app/modules/file-loader/enums/AssetSetEnum';
import { FileService } from 'src/app/modules/file-loader/services/file.service';
import { StaticDataService } from 'src/app/modules/file-loader/services/static-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public fileCount = 0;
  public showButtons = false;

  constructor(public readonly fileService: FileService,
    private readonly staticData: StaticDataService) {}

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


  public showExamples(exampleIndex: number): void {
    switch (exampleIndex) {
      case 0:
        this.updateFiles(this.staticData.get(AssetSetEnum.CURIOUS_ZELDA));
        break;
      case 1:
        this.updateFiles(this.staticData.get(AssetSetEnum.SINGLE_GIF));
        break;
      case 2:
        this.updateFiles(this.staticData.get(AssetSetEnum.SINGLE_SVG));
        break;
      case 3:
        this.updateFiles(this.staticData.get(AssetSetEnum.MP3));
        break;
      case 4:
        this.updateFiles(this.staticData.get(AssetSetEnum.GIANT_CATS));
        break;
      default:
        this.updateFiles(this.staticData.get(AssetSetEnum.CURIOUS_ZELDA));
        break;
    }
  }

}
