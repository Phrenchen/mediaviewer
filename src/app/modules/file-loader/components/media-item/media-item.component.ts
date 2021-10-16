import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MediaFile } from 'src/app/modules/file-loader/interfaces/MediaFile';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})
export class MediaItemComponent implements OnInit, OnDestroy {
  @Input() item: MediaFile | null = null;
  @Input() selected: boolean = false;
  @Input() tabIndex: number = 0;
  @Input() showNaviButtons: boolean = false;

  @Output() itemClicked: EventEmitter<MediaFile> =
    new EventEmitter<MediaFile>();

  @Output() selectPrevious: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectNext: EventEmitter<any> = new EventEmitter<any>();

  public itemSwitchDelay: number = 5;
  public itemId: number;
  public isPlaying: boolean = false;

  public isHovering: boolean = false;

  private playInterval: any;

  constructor() {
    this.itemId = Date.now();
  }

  ngOnInit(): void {
    // console.log('media type:', this.item?.type);
  }


  ngOnDestroy(): void {
    this.stopInterval();
  }
  // LIFE CYCLE end

  public hoverStart(event: MouseEvent): void {
    // console.log('hover start');
    this.isHovering = true;
  }

  public hoverEnd(event: MouseEvent): void {
    // console.log('hover end');
    this.isHovering = false;
  }

  public getUrl(item: MediaFile | null): string | any{
    if(!item) {
      return '';
    }

    if (item.fileReader) {
      return item.fileReader.result;
    }
    else {
      item.url;
    }
  }

  public togglePlayPause(): void {
    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) {
      this.restartInterval();
    } else {
      this.stopInterval();
    }
  }



  public switchDelayChange(event: any): void {
    this.itemSwitchDelay = event.target.value;

    if(this.isPlaying) {
      this.restartInterval();
    }
  }

  private restartInterval() {
    this.stopInterval();

    this.playInterval = setInterval(() => {
      this.selectNext.emit(this.item);
    }, this.itemSwitchDelay * 1000); // to milliseconds
  }

  private stopInterval() {
    if (this.playInterval) {
      clearInterval(this.playInterval);
      this.playInterval = null;
    }
  }

  public onItemClicked(): void {
    this.itemClicked.emit(this.item as MediaFile);
  }

  public previous(event: Event): void {
    this.blockClick(event);
    this.selectPrevious.emit(this.item);
  }

  public next(event: Event): void {
    this.blockClick(event);
    this.selectNext.emit(this.item);
  }

  private blockClick(event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
}
