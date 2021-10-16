import {MenuState} from './MenuState';

export interface MenuConfig {
  id: string;
  menuStates: MenuState[];
  currentStateName: string;
}
