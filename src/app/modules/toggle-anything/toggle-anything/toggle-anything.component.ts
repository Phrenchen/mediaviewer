import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-anything',
  templateUrl: './toggle-anything.component.html',
  styleUrls: ['./toggle-anything.component.css']
})
export class ToggleAnythingComponent implements OnInit {

  @Input() enabledLabel: string;
  @Input() disabledLabel: string;
  @Input() initialState: boolean = false;

  @Output() toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  public toggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.toggle = this.initialState;
  }

  public onToggle(): void {
    this.toggle = !this.toggle;
    this.toggled.emit(this.toggle);
  }

}
