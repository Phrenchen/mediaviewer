import {Component, OnInit} from '@angular/core';
import {MenuState} from '../../interfaces/MenuState';
import {MultiStateMenuService} from '../../services/multi-state-menu.service';

@Component({
  selector: 'app-multi-state-menu',
  templateUrl: './multi-state-menu.component.html',
  styleUrls: ['./multi-state-menu.component.css']
})
export class MultiStateMenuComponent implements OnInit {

  constructor(private readonly menuStateService: MultiStateMenuService) { }

  ngOnInit(): void {
    this.menuStateService.stateChange$.subscribe(anyState => {
      // console.log('observing all state changes:', anyState);
    })


  }


}
