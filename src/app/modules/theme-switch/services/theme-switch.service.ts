import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitchService {
  private isDarkTheme: boolean = true;
  private isDarkTheme$$: Subject<boolean> = new BehaviorSubject<boolean>(this.isDarkTheme);
  public isDarkTheme$: Observable<boolean> = this.isDarkTheme$$.asObservable();

  constructor() {}

  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;

    const bgVariable: string = this.isDarkTheme ? '--dark-bg' : '--light-bg';
    const txtVariable: string = this.isDarkTheme ? '--light-txt' : '--dark-txt';

    // read variable
    const bgColor: string = getComputedStyle(document.body).getPropertyValue(
      bgVariable
    );
    const txtColor: string = getComputedStyle(document.body).getPropertyValue(
      txtVariable
    );

    // write to css variables
    document.documentElement.style.setProperty('--selected-bg-color', bgColor);

    document.documentElement.style.setProperty(
      '--selected-txt-color',
      txtColor
    );

    this.isDarkTheme$$.next(this.isDarkTheme);
  }
}
