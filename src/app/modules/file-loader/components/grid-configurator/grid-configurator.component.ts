import { Component, HostListener, OnInit } from '@angular/core';

/**
 * writes css variables to override grid configuration:
 *  - amount of columns: --col-count (root)
 */

@Component({
  selector: 'app-grid-configurator',
  templateUrl: './grid-configurator.component.html',
  styleUrls: ['./grid-configurator.component.css'],
})
export class GridConfiguratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public increaseColCount(event): void {
    let currColCount: number = this.getCurrentColCount();

    currColCount++;

    this.updateCurrentColCount(currColCount);
  }

  public decreaseColCount(event): void {
    let currColCount: number = this.getCurrentColCount();
    currColCount = currColCount - 1 >= 1 ? currColCount - 1 : 1;

    this.updateCurrentColCount(currColCount);
  }

  public resetToDefault(): void {}

  // PRIVATE
  private updateCurrentColCount(currColCount: number) {
    // write col count to css variable
    document.documentElement.style.setProperty(
      '--col-count',
      currColCount.toString()
    );
  }

  private getCurrentColCount(): number {
    const colCountProp: any = getComputedStyle(document.body).getPropertyValue(
      '--col-count'
    );
    let currColCount: number = colCountProp ? parseInt(colCountProp) : 1;

    if (isNaN(currColCount)) {
      currColCount = 1;
    }

    return currColCount;
  }
}
