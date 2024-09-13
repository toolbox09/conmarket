import { useMapPositionChanged } from '../internal';
import { ReactNode } from 'react';



interface Marker {
  targetId : string;
  type : {
    code : string;
    label : string;
  },
  propertyType : {
    code : string;
    label : string;
  },
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


interface ValueupMapMarkerProps {
  url : string;
  marker : ( marker : Marker) => ReactNode;
}

export function ValueupMapMarker( { url } : ValueupMapMarkerProps ) {
  useMapPositionChanged( ( position )=>{
    
  })

  return null;
}