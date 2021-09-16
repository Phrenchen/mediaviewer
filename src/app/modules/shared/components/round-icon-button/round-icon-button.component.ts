import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-round-icon-button',
  templateUrl: './round-icon-button.component.html',
  styleUrls: ['./round-icon-button.component.css'],
})
export class RoundIconButtonComponent implements OnInit, AfterViewInit {
  public isHovering = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const hoverableArea: HTMLElement = document.querySelector(
      '#hoverable-area'
    ) as HTMLElement;
    const homingItem: HTMLElement = document.querySelector(
      '#homing-item'
    ) as HTMLElement;

    if (!hoverableArea || !homingItem) {
      return;
    }

    const hoverStartObserver: Observable<MouseEvent> = fromEvent(
      hoverableArea,
      'mouseover'
    ) as Observable<MouseEvent>;
    const hoverEndObserver: Observable<MouseEvent> = fromEvent(
      hoverableArea,
      'mouseout'
    ) as Observable<MouseEvent>;
    hoverStartObserver.pipe(throttleTime(30)).subscribe((event) => {
      this.isHovering = true;
    });
    hoverEndObserver.pipe(throttleTime(30)).subscribe((event) => {
      this.isHovering = false;
    });

    // hoverableArea
    const mouseMoveObserver: Observable<MouseEvent> = fromEvent(
      hoverableArea,
      'mousemove'
    ) as Observable<MouseEvent>;
    mouseMoveObserver.pipe(throttleTime(30)).subscribe((event) => {
      let mouseX = event.clientX - hoverableArea.getBoundingClientRect().left;
      let mouseY = event.clientY - hoverableArea.getBoundingClientRect().top;

      this.moveItem(homingItem, { top: mouseY, left: mouseX });

      //   homingItem.style.left = mouseX + 'px';
      //   homingItem.style.top = mouseY + 'px';
    });

    this.moveItem(homingItem, { top: '50%', left: '50%' });
  }

  private moveItem(
    item: HTMLElement,
    position: { top: number | string; left: number | string }
  ): void {
    if (typeof position.top === 'string') {
      item.style.left = position.left as string;
      item.style.top = position.top as string;
    } else {
      item.style.left = position.left + 'px';
      item.style.top = position.top + 'px';
    }
  }
}
