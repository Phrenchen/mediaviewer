import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('class.fileover') fileOver: boolean = false;
  @Output() filesDropped: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  // DRAG OVER
  @HostListener('dragover', ['$event']) onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = true;
  };

  // DRAG LEAVE
  @HostListener('dragleave', ['$event']) onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();

    // console.log('drag leave');
  };

  // DROP
  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;

    const files = event.dataTransfer?.files;

    if(files && files.length > 0) {
      this.filesDropped.emit(files);
    }
  };
}
