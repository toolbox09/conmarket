import { Floor } from '../internal';

/** 건축물 */
export interface Prop {
  id : string;
  name : string;
  roadAddress : string;
  gfa : number;
  height : number;
  coDate : Date;
  isMain : boolean;
  structCode : string;
  structName : string;
  mainUseCode : string;
  mainUseName : string;
  houseNumber : number;
  unitNumber : number;
  far : number;
  bcr : number;
  floors : Floor[];
}