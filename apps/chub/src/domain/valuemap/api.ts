import axios from 'axios';
import { Marker, MarkerTypeCode, PropertyTypeCode } from './marker';

export interface GetMarkerOption {
  areaUnitType : 'PYEONG',
  leftBottomPointX: number;
  leftBottomPointY: number;
  rightTopPointX: number;
  rightTopPointY: number;
  zoomLevel : number;
  types : MarkerTypeCode[];
  propertyTypes? : PropertyTypeCode[];
}


export interface GetMarkerRes {
  markers : Marker[];
  zoomLevel : number;
}

export async function getMarker( url : string, option : GetMarkerOption ) {
  const response = await axios.get<GetMarkerRes>(`${url}/markers`, {
    params : { 
      areaUnitType : option.areaUnitType,
      leftBottomPointX : option.leftBottomPointX,
      leftBottomPointY : option.leftBottomPointY,
      rightTopPointX : option.rightTopPointX,
      rightTopPointY : option.rightTopPointY,
      zoomLevel : option.zoomLevel,
      types : option.types.join(','),
      propertyTypes : option.propertyTypes?.join(','),
    }
  })
  return response.data;
}

// https://192.168.40.174/markers