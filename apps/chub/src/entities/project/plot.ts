import { Geometry } from 'geojson';
import { Coordinate, Prop } from '../internal';

/** 토지정보 */
export interface Plot {
  pnu : string;
  isMain : string;
  address : string;
  roadAddress : string;
  jimokCode : string;
  jimokName : string;
  terrainCode : string;
  terrainName : string;
  shapeCode : string;
  shapeName : string;
  roadJoinCode : string;
  roadJoinName : string;
  area : number;
  useAreaName : string;
  useAreaName2 : string;
  useAreaCode : string;
  ownerName : string;
  officialPrice : number;
  officialPriceDate : Date;
  estimatedPriceWeight : number;
  estimatedPrice : number;
  maxFar : number;
  maxBcr : number;
  geometry : Geometry;
  center? : Coordinate;
  props? : Prop[];
  others? : Plot[];
}