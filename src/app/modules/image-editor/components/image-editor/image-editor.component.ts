import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { MediaFile } from 'src/app/modules/file-loader/interfaces/MediaFile';
import { ImageConsts } from '../../constants/ImageConsts';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css'],
})
export class ImageEditorComponent implements OnInit {

  @Input() item!: MediaFile;
  @Output() selectPrevious: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemClicked: EventEmitter<MediaFile> = new EventEmitter<MediaFile>();

  public borderVars: Array<{ varKey: string; value: number }> = [
    {
      varKey: '--f-border-top-height',
      value: 0,
    },
    {
      varKey: '--f-border-right-width',
      value: 0,
    },
    {
      varKey: '--f-border-bottom-height',
      value: 0,
    },
    {
      varKey: '--f-border-left-width',
      value: 0,
    },
  ];

  public color: string = '';
  public axisOptions = [
    ImageConsts.ALL,
    ImageConsts.HORIZONTAL,
    ImageConsts.VERTICAL,
  ];
  public borderForm?: FormGroup;


  private attributeLabels: Map<string, string[]> = new Map<string, string[]>();
  private borderSizeControlArray?: FormArray; // TODO: TYPE

  // CROP
  public imageChangedEvent: any = '';
  public croppedImage: any = '';


  constructor(private readonly formbuilder: FormBuilder) {
    this.attributeLabels.set('borders', ['Top', 'Right', 'Bottom', 'Left']);

  }

  private updateForm(): void {
    if (!this.borderSizeControlArray) {
      return;
    }

    // console.log(this.borderSizeControlArray.value, '_____________');
    this.borderSizeControlArray.patchValue([0, 0, 0, 0]); // ?????????????????????????????????? replace with 0?
    // console.log(this.borderSizeControlArray.value);
  }

  ngOnInit(): void {
    const bodyStyles = window.getComputedStyle(document.body);

    // read initial values
    console.log(
      bodyStyles.getPropertyValue(this.borderVars[0].varKey).replace('px', '')
    );

    const topHeight: number = bodyStyles
      .getPropertyValue(this.borderVars[0].varKey)
      .replace('px', '') as unknown as number; // parseFloat(bodyStyles.getPropertyValue(variables[0]).replace('px', '')); //get
    const rightWidth: number = bodyStyles
      .getPropertyValue(this.borderVars[1].varKey)
      .replace('px', '') as unknown as number; //get
    const bottomHeight: number = bodyStyles
      .getPropertyValue(this.borderVars[2].varKey)
      .replace('px', '') as unknown as number; //get
    const leftWidth: number = bodyStyles
      .getPropertyValue(this.borderVars[3].varKey)
      .replace('px', '') as unknown as number; //get

    // console.log(
    //   'bodyStyles.getPropertyValue(variables[0])',
    //   bodyStyles.getPropertyValue(this.borderVars[0].varKey)
    // );

    this.borderSizeControlArray = this.formbuilder.array([
      this.formbuilder.control(topHeight, Validators.required), // top
      this.formbuilder.control(rightWidth, Validators.required), // right
      this.formbuilder.control(bottomHeight, Validators.required), // bottom
      this.formbuilder.control(leftWidth, Validators.required), // left
    ]);

    this.borderForm = this.formbuilder.group({
      size: this.formbuilder.array(this.borderSizeControlArray.controls),
      color: this.formbuilder.group({
        top: ['#fff', Validators.required],
        right: ['#fff', Validators.required],
        bottom: ['#fff', Validators.required],
        left: ['#fff', Validators.required],
      }),

      // firstName: ['', Validators.required],
    });

    this.borderForm.valueChanges.subscribe((changes) => {
      if (changes.size) {
        changes.size.forEach((size: any, index: number) => {
          // update local values
          this.borderVars[index].value = size;

          // console.log('writing variable', this.borderVars[index]);
          document.body.style.setProperty(
            this.borderVars[index].varKey,
            size + 'px'
          ); //set css variable
        });
      }
    });
  }

  private setAllBorders(width: number): void {
    this.borderVars.forEach((borderVar) => {
      document.body.style.setProperty(borderVar.varKey, width + 'px'); //set css variable
    });
  }

  public updateColor(color: string): void {
    document.body.style.setProperty('--f-border-color', color); //set css variable
  }

  public resetBorders(event: MouseEvent | any): void {
    console.log('reset borders');
    this.setAllBorders(0);
    this.updateForm(); // patch form with new values
  }
  public getLabel(group: string, index: number): string {
    return (this.attributeLabels.get(group) as string[])[index];
  }

  public get borders(): FormArray {
    return this.borderForm?.get('size') as FormArray;
  }

  //
  public onItemClicked(): void {
    console.log('cliggy dat');
    this.itemClicked.emit(this.item as MediaFile);
  }

  public previous(event: Event): void {
    this.blockClick(event);
    this.selectPrevious.emit(this.item);
  }

  public next(event: Event): void {
    this.blockClick(event);
    this.selectNext.emit(this.item);
  }

  private blockClick(event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }


  // CROP
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
