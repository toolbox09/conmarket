import { ReactNode, useState } from 'react';
import { useMapPositionChanged, CustomOverlay } from '@repo/kakao-map';
import { Marker } from './marker';
import { GetMarkerOption } from './api';

interface ValueupMapMarkerProps {
  url : string;
  option : Omit<GetMarkerOption, ''>
  marker : ( marker : Marker) => ReactNode;

}

export function ValueupMapMarker( { url, marker } : ValueupMapMarkerProps ) {

  const [ markers ] = useState<Marker[]>([]);

  useMapPositionChanged( ( position )=>{
    console.log(url, position);
  })

  return (
    <>
      {markers.map( _ => <CustomOverlay position={{ lat : _.latitude, lng : _.longitude }} >{marker(_)}</CustomOverlay>  )}
    </>
  )
}