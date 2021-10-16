import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, pipe, Subject} from 'rxjs';
import {MenuState} from '../interfaces/MenuState';
// import {MenuStateChange} from '../interfaces/MenuStateChange';
import {filter, map} from 'rxjs/operators';
import {MenuConfig} from '../interfaces/MenuConfig';

@Injectable({
  providedIn: 'root'
})
export class MultiStateMenuService {
  private menuIdCounter = 0;
  private menuConfigs: MenuConfig[] = [];

  private stateChange$$: Subject<MenuConfig> =
    new Subject<MenuConfig>();

  public stateChange$: Observable<MenuConfig> = this.stateChange$$.asObservable();

  constructor() {
  }

  public addMenuConfig(menuConfig: Partial<MenuConfig>): MenuConfig {
    const newMenu: MenuConfig = {...menuConfig,
      id: 'menu-' + this.menuIdCounter++,
      menuStates: menuConfig.menuStates || [],
      currentStateName: menuConfig.currentStateName || 'no current state name'
    };

    // console.log('added new menu config:', newMenu);
    this.menuConfigs.push(newMenu);

    return newMenu;
  }

  public stateContainsItem(menuConfig: MenuConfig, itemName: string): boolean {
    const hasItem = !!menuConfig.menuStates.find(state => {
      {
        console.log(state.stateName, menuConfig.currentStateName);
        return state.stateName === menuConfig.currentStateName && state.visibleItems.indexOf(itemName) >= 0
      };
    });
    // console.log('has item??', itemName, hasItem);

    return hasItem;
  }

  // TODO: add menuId to enable multiple menus!
  public observeMenu(menuId: string): Observable<MenuConfig> {
    return this.stateChange$.pipe(
      filter(newState => newState.id === menuId)
    );
  }


  public nextState(menueId: string, stateName: string): void {
    // TODO
    // this.stateChange$$.next({state, payload});
    const config: MenuConfig = this.menuConfigs.find(config => config.id === menueId) as MenuConfig;
    // console.log('next state for config', config, stateName);

    if(config) {
      config.currentStateName = stateName;

      this.stateChange$$.next(config);
    }
  }
}
