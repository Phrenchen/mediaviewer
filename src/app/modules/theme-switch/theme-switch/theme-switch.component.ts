import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/modules/theme-switch/services/theme-switch.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent implements OnInit {



  constructor(public readonly themeSwitchService: ThemeSwitchService) { }

  ngOnInit(): void {
  }


}
