import { Injectable } from '@angular/core';
import { AssetSetEnum as AssetSetEnum } from '../enums/AssetSetEnum';

@Injectable({
  providedIn: 'root',
})
export class StaticDataService {
  private assetMap: Map<string, any[]> = new Map<string, any[]>();

  constructor() {
    this.initZelda();
    this.assetMap.set(AssetSetEnum.SINGLE_GIF, ['assets/images/a-cat.gif'])
    this.assetMap.set(AssetSetEnum.SINGLE_SVG, ['assets/images/svg/fahrauftraege-type-deliver.svg'])
    this.assetMap.set(AssetSetEnum.MP3, ['assets/audio/15 B-Boy Bouilabaisse.mp3']);
  }

  public get(assetSetName: AssetSetEnum): any[] {
    if (this.assetMap.has(assetSetName)) {
      return this.assetMap.get(assetSetName);
    }

    return [];
  }

  // PRIVATE
  private initZelda() {
    const folder: string = 'assets/images/curious_zelda/';
    const imageUrls: string[] = [];
    const zeldaCount: number = 45;
    const gifIndeces: number[] = [42, 44];

    for (let i = 1; i <= zeldaCount; i++) {
      if(gifIndeces.includes(i)){
        imageUrls.push(folder + 'curious_zelda_' + i + '.gif');

      }
      else {
        imageUrls.push(folder + 'curious_zelda_' + i + '.jpg');
      }
    }

    this.assetMap.set(AssetSetEnum.CURIOUS_ZELDA, imageUrls);
  }
}
