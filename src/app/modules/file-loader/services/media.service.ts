import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor() {}

  public getTypeByUrl(url: string): string {
    const urlParts: string[] = url.split('.');
    const fileSuffix: string = urlParts.length > 0 ? urlParts[0].toLowerCase() : '';
    let type: string;

    switch (fileSuffix) {
      case 'mp3':
        type = 'audio';
        break;
      case 'mp4':
        type = 'video';
        break;
      case 'jpg':
      case 'jpeg':
      case 'png':
        type = 'image';
        break;
      case 'pdf':
        type = 'pdf';
        break;
      default:
        type = 'unknown';
    }

    return type;
  }

  public getType(type: string): string {
    if (!type) {
      return 'unknown: ' + type;
    }

    let result: string = '';

    if (this.isSVG(type)) result = 'svg';
    else if (this.isPDF(type)) result = 'pdf';
    else if (this.isAudio(type)) result = 'audio';

    // video, all other images
    result = type.split('/')[0];

    // console.log('type:', result);

    return result;

    // return type ? type.split('/')[0] : 'unknown: ' + type;
  }

  // jpg, png, gif
  public isBitmapImage(type: string): boolean {
    return type.indexOf('image') >= 0 && !this.isSVG(type);
  }

  // svg
  public isSVG(type: string): boolean {
    return type.indexOf('svg') >= 0;
  }

  // pdf
  public isPDF(type: string): boolean {
    return type === 'application/pdf';
  }

  // mpg, ogg, mov(?)
  public isVideo(type: string): boolean {
    return type.indexOf('video') >= 0;
  }

  // mp3, ogg
  public isAudio(type: string): boolean {
    return type.indexOf('audio') >= 0;
  }
}
