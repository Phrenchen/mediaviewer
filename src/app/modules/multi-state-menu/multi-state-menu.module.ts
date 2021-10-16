import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiStateMenuService} from './services/multi-state-menu.service';
import { MultiStateMenuComponent } from './components/multi-state-menu/multi-state-menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';



@NgModule({
  declarations: [
    MultiStateMenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultiStateMenuComponent
  ],
  providers: [
    MultiStateMenuService
  ]
})
export class MultiStateMenuModule { }
