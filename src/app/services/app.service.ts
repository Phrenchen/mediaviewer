import { Injectable } from '@angular/core';
import {MenuConfig} from '../modules/multi-state-menu/interfaces/MenuConfig';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {MultiStateMenuService} from '../modules/multi-state-menu/services/multi-state-menu.service';
import {MainMenuState} from '../interfaces/MainMenuState';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public mainMenuConfig: MenuConfig = this.multiStateService.addMenuConfig({
    currentStateName: '',
    menuStates: [
      {
        stateName: MainMenuState.NO_MEDIA,
        visibleItems: ['btn-import-files', 'btn-show-info']
      },
      {
        stateName: MainMenuState.SINGLE_MEDIA,
        visibleItems: ['btn-import-files', 'btn-show-info', 'btn-clear-list']
      },
      {
        stateName: MainMenuState.MEDIA_LIST,
        visibleItems: [
          'btn-import-files',
          'btn-configure-grid',
          'btn-show-info',
          'btn-clear-list',
        ]
      },
      {
        stateName: MainMenuState.MEDIA_DETAIL,
        visibleItems: ['btn-edit', 'btn-presentation']
      }
    ]
  });

  private mainMenuConfig$$: Subject<MenuConfig> = new BehaviorSubject<MenuConfig>(this.mainMenuConfig);
  public mainMenuConfig$: Observable<MenuConfig> = this.mainMenuConfig$$.asObservable();

  constructor(private readonly multiStateService: MultiStateMenuService,) {

  }
}
