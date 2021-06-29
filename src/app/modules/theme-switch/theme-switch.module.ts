import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { ThemeSwitchService } from 'src/app/modules/theme-switch/services/theme-switch.service';

@NgModule({
  declarations: [ThemeSwitchComponent],
  imports: [CommonModule],
  providers: [ThemeSwitchService],
  exports: [ThemeSwitchComponent]
})
export class ThemeSwitchModule {}
