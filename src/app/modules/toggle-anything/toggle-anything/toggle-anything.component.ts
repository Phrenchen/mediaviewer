import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-anything',
  templateUrl: './toggle-anything.component.html',
  styleUrls: ['./toggle-anything.component.css']
})
export class ToggleAnythingComponent implements OnInit {

  @Input() iconName = 'menu';
  @Input() showLabel = true;
  @Input() enabledLabel: string = '';
  @Input() disabledLabel: string = '';
  @Input() selected: boolean | null = false;

  @Output() toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  // public toggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.selected = this.selected as boolean;
  }

  public onToggle(): void {
    this.selected = !this.selected;
    this.toggled.emit(this.selected);
  }

}
