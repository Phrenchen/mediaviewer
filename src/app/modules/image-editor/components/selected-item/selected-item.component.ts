import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediaFile } from 'src/app/modules/file-loader/interfaces/MediaFile';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {
  @Input() item: MediaFile | null = null;
  @Input() selected: boolean = false;
  @Input() tabIndex: number = 0;
  @Input() showNaviButtons: boolean = false;
  @Input() showEditor: boolean = true;


  @Output() itemClicked: EventEmitter<MediaFile> =
    new EventEmitter<MediaFile>();

  @Output() selectPrevious: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectNext: EventEmitter<any> = new EventEmitter<any>();

  public itemSwitchDelay: number = 5;
  public itemId: number;
  public isPlaying: boolean = false;

  private playInterval: any;

  constructor() {
    this.itemId = Date.now();
  }

  ngOnInit(): void {
    console.log('media type:', this.item.type);
  }


  ngOnDestroy(): void {
    this.stopInterval();
  }
  // LIFE CYCLE end

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
    this.itemClicked.emit(this.item);
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
