import {Component, OnInit} from '@angular/core';
import {AssetSetEnum} from 'src/app/modules/file-loader/enums/AssetSetEnum';
import {FileService} from 'src/app/modules/file-loader/services/file.service';
import {StaticDataService} from 'src/app/modules/file-loader/services/static-data.service';
import {MultiStateMenuService} from '../../modules/multi-state-menu/services/multi-state-menu.service';
import {MenuState} from '../../modules/multi-state-menu/interfaces/MenuState';
import {MenuConfig} from '../../modules/multi-state-menu/interfaces/MenuConfig';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public fileCount = 0;
  public showButtons = false;

  public menuConfig?: MenuConfig;
  public buttonStates: Map<string, boolean> = new Map<string, boolean>();

  constructor(public readonly fileService: FileService,
    private readonly multiStateService: MultiStateMenuService,
    private readonly appService: AppService,
    private readonly staticData: StaticDataService) {

    this.buttonStates.set('btn-import-files', false);
    this.buttonStates.set('btn-configure-grid', false);
    this.buttonStates.set('btn-show-info', false);
    this.buttonStates.set('btn-clear-list', false);
    this.buttonStates.set('btn-edit', false);
    this.buttonStates.set('btn-presentation', false);

    this.appService.mainMenuConfig$.subscribe(menuConfig => {
      // console.log('main menu config updated:', menuConfig);
      this.menuConfig = menuConfig;
      this.updateItemVisibility(menuConfig);
    });

    this.multiStateService.observeMenu(this.menuConfig?.id || '1').subscribe(nextState => {
      // console.log('update menu', nextState);

      this.updateItemVisibility(nextState);
    });
  }

  ngOnInit(): void {
    this.fileService.files$.subscribe(files => {
      // console.log('file count for settings', files.length);
      this.fileCount = files.length;
    });


  }

  public itemVisible(itemName: string): boolean {
    return !!this.buttonStates.get(itemName);
  }

  private updateItemVisibility(menuConfig: MenuConfig): void {
    const menuState: MenuState = this.menuConfig?.menuStates.find(state => menuConfig.currentStateName === state.stateName) as MenuState;
    if (menuState) {
      Array.from(this.buttonStates.entries()).forEach(state => {
        // console.log('checking state', state, menuState, menuState.visibleItems.indexOf(state[0]));
        this.buttonStates.set(state[0], menuState.visibleItems.indexOf(state[0]) >= 0);
      });
    }

    // console.log('button states', this.buttonStates);

    // this.showImportFiles = this.multiStateService.stateContainsItem(menuConfig, 'btn-import-files');
    // console.log('show import files', this.showImportFiles);
    //   !!menuConfig.menuStates.find(state => {
    //   return state.visibleItems.indexOf('btn-import-files')
    // });
  }

  public startPresentation(): void {
    console.log('TODO: start presentation mode: show submenu with slider & co');
  }

  public startEditing(): void {
    console.log('TODO: start edit mode: image editor');
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
