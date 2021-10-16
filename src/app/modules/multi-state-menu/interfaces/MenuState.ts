//export type MenuState = 'NO_MEDIA' | 'MEDIA_LIST' | 'MEDIA_DETAIL';
/*export enum MenuState {
  'NO_MEDIA',
  'MEDIA_LIST',
  'MEDIA_DETAIL'
}
*/

export interface MenuState {
 stateName: string,
 visibleItems: any[]
}
