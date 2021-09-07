import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MediaFile } from '../interfaces/MediaFile';
import { MediaService } from './media.service';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private files: MediaFile[] = [];

  private files$$: Subject<MediaFile[]> = new BehaviorSubject<any[]>(this.files);
  public files$: Observable<MediaFile[]> = this.files$$.asObservable();

  constructor(private readonly mediaService: MediaService, private sanitizer: DomSanitizer) {
    this.files$$.pipe().subscribe((files: MediaFile[]) => {
      // console.log('subscribers of files: ', files);
    });
  }

  public updateFiles(files: any[]): void {
    // console.log('updating with files:', files);
    if(files.length > 0) {
      this.files = [];
      this.initFiles(files);
      this.files$$.next(this.files);
    }
    else {
      console.log('clear files -> empty list');
      this.files$$.next([]);
    }
  }

  private initFiles(files: File[] | string[]): void {
    if (FileReader && files.length > 0) {
      // const fileCount: number = files.length;
      // this.imagesAvailable = false;

      files.forEach((fileOrUrl: File | string) => {
        if (typeof fileOrUrl === 'string') {
          this.handleUrl(fileOrUrl as string);
        } else {
          this.handleFile(fileOrUrl as File);
        }
      });
    }
  }

  // PRIVATE
  private handleUrl(fileUrl: string): void {
    if (!this.files.find((mf) => mf.url === fileUrl)) {
      const media: MediaFile = {
        rawType: this.mediaService.getTypeByUrl(fileUrl),
        type: this.mediaService.getTypeByUrl(fileUrl),
        url: fileUrl,
        fileReader: undefined,
        file: undefined,
        svgSrc: null,
        videoSrc: null,
      };
      this.files.push(media);
    }
  }

  private handleFile(file: File): void {
    // let filesLoaded: number = 0;

    const fr: FileReader = new FileReader();
    fr.onload = (result) => {
      fr.readAsDataURL(file as File);
      const media: MediaFile = {
        rawType: file.type,
        type: this.mediaService.getType(file.type),
        url: undefined,
        fileReader: fr,
        file: file,
        svgSrc: null,
        // this.mediaService.isSVG(file.type)
        //   ? this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
        // : null,
        videoSrc: this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(file)
        ),
      };
      this.files.push(media);
      // console.log('media file dropped: ', media);
    };
  }
}
