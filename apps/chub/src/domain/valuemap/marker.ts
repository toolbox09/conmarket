

export type MarkerTypeCode = 'TRADE' | 'ITEM';
interface MarkerType {
  code : MarkerTypeCode;
  label : string;
}

export type PropertyTypeCode = 'LAND' | 'HOUSING' | 'BUILDING' | 'FACTORY' | 'STORE' | 'APT';
interface PropertyType {
  code : PropertyTypeCode;
  label : string;
}

export interface Marker {
  targetId : string;
  type : MarkerType;
  propertyType : PropertyType;
  propertyTitle : string;
  pnu : string;
  dealMethodType : string;
  latitude : number;
  longitude : number;
  price : number;
  landPricePerSquareMeter : number;
  landPricePerPyeong : number;
  buildingPricePerSquareMeter : number;
  buildingPricePerPyeong : number;
  landArea : number;
  buildingTotalArea : number;
  partitionArea : number;
  partitionTradeCount : number;
  itemCount : number;
  tradeDate : string;
  registrationIssued : boolean;
  profileImageUrl : string;
  markerHeader : string;
  markerMiddle : string;
  markerBottom : string;
  newTransaction : boolean;
  hasAuction : boolean;
  isOwned :  boolean;
  showBrokerageTooltip : boolean;
}

