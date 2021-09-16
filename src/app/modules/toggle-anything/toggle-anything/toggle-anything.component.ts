import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-anything',
  templateUrl: './toggle-anything.component.html',
  styleUrls: ['./toggle-anything.component.css']
})
export class ToggleAnythingComponent implements OnInit {

  @Input() enabledLabel: string = '';
  @Input() disabledLabel: string = '';
  @Input() initialState: boolean | null = false;

  @Output() toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  // public toggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.initialState = this.initialState as boolean;
  }

  public onToggle(): void {
    this.initialState = !this.initialState;
    this.toggled.emit(this.initialState);
  }

}
