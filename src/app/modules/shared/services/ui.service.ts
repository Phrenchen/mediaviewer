import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FileService } from '../../file-loader/services/file.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private hasFiles$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public hasFiles$: Observable<boolean> = this.hasFiles$$.asObservable();

  private showUi$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showUi$: Observable<boolean> = this.showUi$$.asObservable();

  constructor(private fileService: FileService) {

    this.fileService.files$.subscribe(files => {
      this.hasFiles$$.next(files.length > 0);
    });
   }


   public showUi(value: boolean): void {
     this.showUi$$.next(value);
   }
}
