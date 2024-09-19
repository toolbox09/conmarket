import { ReactNode, useState } from 'react';
import { useMapPositionChanged, CustomOverlay } from '@repo/kakao-map';
import { Marker } from './marker';
import { getMarker, GetMarkerOption } from './api';

interface ValueupMapMarkerProps {
  url : string;
  option : Omit<GetMarkerOption, ''>
  marker : ( marker : Marker) => ReactNode;

}

export function ValueupMapMarker( { url, marker } : ValueupMapMarkerProps ) {

  const [ markers, setMarkers ] = useState<Marker[]>([]);

  useMapPositionChanged( ( position )=>{
    
  })

  return (
    <>
      {markers.map( _ => <CustomOverlay position={{ lat : _.latitude, lng : _.longitude }} >{marker(_)}</CustomOverlay>  )}
    </>
  )
}