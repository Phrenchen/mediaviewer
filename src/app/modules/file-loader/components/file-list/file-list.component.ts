import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaFile } from '../../interfaces/MediaFile';
import { FileService } from '../../services/file.service';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
})
export class FileListComponent implements OnInit, AfterViewInit {
  @Input() autoSelectFirst: boolean = true;

  public imagesAvailable: boolean = false;

  public mediaFiles: MediaFile[] = [];

  // public selectedFile: MediaFile | null = null;
  public selectedFileIndex: number = -1;

  private isInitialized: boolean = false;

  constructor(
    private readonly fileService: FileService,
    private sanitizer: DomSanitizer
  ) {}


  ngOnInit(): void {
    this.fileService.files$.subscribe(files => {
      console.log('received new files:', files.length);
      this.mediaFiles = files;
      // this.mediaFiles = [];
      // this.initFiles(this.files);

    })
  }

  ngAfterViewInit(): void {
    if(this.autoSelectFirst) {
      // delay optional initial click on first item by 1 frame to avoid:
      // Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'false'. Current value: 'true'
      setTimeout(() => {
        this.itemClicked(0);
     }, 0);
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.files && changes.files.currentValue.length === 0) {
  //     console.log('resetting with 0 files');
  //     this.mediaFiles = [];
  //     this.imagesAvailable = false;
  //     return;
  //   }

  //   const files: File[] | string[] = changes.files.currentValue;

  //   this.initFiles(files);
  // }
  // LIFE CYCLE end


  public selectPrevious(event: any): void {
    this.selectedFileIndex--;

    if (this.selectedFileIndex < 0) {
      this.selectedFileIndex = this.mediaFiles.length - 1;
    }
  }

  public selectNext(event: any): void {
    this.selectedFileIndex =
      (this.selectedFileIndex + 1) % this.mediaFiles.length;
  }

  public itemClicked(mediaIndex: number): void {
    // console.log('itm clickd', this.selectedFile, media);
    // this.selectedFile = media === this.selectedFile ? null : media;
    this.selectedFileIndex = this.selectedFileIndex !== mediaIndex ? mediaIndex : -1;
    // this.selectedFileIndex = mediaIndex;
  }

  public sanitize(stuff: any): any {
    // return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(stuff));
    return this.sanitizer.bypassSecurityTrustUrl(stuff);
  }

  public getTrustedUrl(fileOrStuff: any): any {
    return this.sanitizer.bypassSecurityTrustUrl(
      URL.createObjectURL(fileOrStuff)
    );
  }
}
