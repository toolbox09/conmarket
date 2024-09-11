
/** 층 정보 */
export interface Floor {
  no : number;
  isRoofTop : boolean;
  area : number;
  mainUseCode : string;
  mainUseName : string;
  ectUseNames : string[];
}