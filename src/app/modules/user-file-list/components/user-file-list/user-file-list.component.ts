import { Component, OnInit } from '@angular/core';
import { MediaFile } from 'src/app/modules/file-loader/interfaces/MediaFile';
import { FileService } from 'src/app/modules/file-loader/services/file.service';
import { MediaPath } from '../../interfaces/MediaPath';

@Component({
  selector: 'app-user-file-list',
  templateUrl: './user-file-list.component.html',
  styleUrls: ['./user-file-list.component.css']
})
export class UserFileListComponent implements OnInit {

  public mediaPaths: MediaPath[] = [];

  constructor(public readonly fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.files$.subscribe(files => {
      this.mediaPaths = this.extractPathInfo(files);
    });
  }

  private extractPathInfo(files: MediaFile[]): MediaPath[] {
    const paths: MediaPath[] = files.map(file => {
      const splitUrl: string[] = file.url?.split('/') as string[];

      return {
        fileName: splitUrl.pop(),
        path: splitUrl.join('/'),
        isSelected: false
      }
    }) as MediaPath[];

    return paths;
  }
}
