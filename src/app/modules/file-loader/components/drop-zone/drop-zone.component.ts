import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { tap } from 'rxjs/operators';
import { Observable, Subject, Subscription } from 'rxjs';
import { AssetSetEnum } from '../../enums/AssetSetEnum';
import { FileService } from '../../services/file.service';
import { StaticDataService } from '../../services/static-data.service';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.css'],
})
export class DropZoneComponent implements OnInit, OnChanges, OnDestroy {
  @Input() reset: boolean = false;
  @Input() initiallyShowExamples: boolean = true; // TODO: SETTING!

  public hasFiles: boolean = false;
  private subscriptions: Subscription = new Subscription();

  constructor(
    public readonly fileService: FileService,
    private readonly staticData: StaticDataService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.fileService.files$.subscribe((files) => {
        this.hasFiles = files.length > 0;
      })
    );

    if (this.initiallyShowExamples) {
      setTimeout(() => {
        this.showExamples(0);
      }, 0);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.reset.currentValue) {
      this.updateFiles([]);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  // LIFE CYCLE end

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
      default:
        this.updateFiles(this.staticData.get(AssetSetEnum.CURIOUS_ZELDA));
        break;
    }
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

  // PRIVATE
  private updateFiles(files: any[]): void {
    this.fileService.updateFiles(files);
  }
}
