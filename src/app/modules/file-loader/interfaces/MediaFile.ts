export interface MediaFile {
  rawType: string;
  type: string;
  url?: string;
  fileReader?: FileReader;
  file?: File;
  svgSrc?: any;
  videoSrc?: any;

}
