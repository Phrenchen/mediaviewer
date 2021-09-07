import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/modules/theme-switch/services/theme-switch.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(public themeSwitcher: ThemeSwitchService) { }

  ngOnInit(): void {
  }

}
