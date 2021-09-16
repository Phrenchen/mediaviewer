import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { TweenMax, TimelineMax } from 'gsap';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-round-icon-button',
  templateUrl: './round-icon-button.component.html',
  styleUrls: ['./round-icon-button.component.css'],
})
export class RoundIconButtonComponent implements OnInit, AfterViewInit {
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

    const mouseMoveObserver: Observable<MouseEvent> = fromEvent(
      hoverableArea,
      'mousemove'
    ) as Observable<MouseEvent>;

    mouseMoveObserver.pipe(throttleTime(30)).subscribe((event) => {
      let mouseX = event.clientX - hoverableArea.getBoundingClientRect().left;
      let mouseY = event.clientY;

      // mouseX -= homingItem.getBoundingClientRect().width * 0.25;
      // mouseY -= homingItem.getBoundingClientRect().height * 0.5;

      homingItem.style.left = mouseX + 'px';
      homingItem.style.top = mouseY + 'px';
    });
  }
}
