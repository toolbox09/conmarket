import { Flex } from '@repo/ui';
import { Map, useMapPositionChanged } from '@repo/kakao-map';
import { useLocalStorage } from '@repo/react';
import { MapControls } from './MapControls';


interface MapPosition {
  center : { lat : number, lng : number },
  level : number,
}

function useMapPosition() {
    return useLocalStorage<MapPosition>('chub-map-position',{
      center : { 
          lat : 37.566826, 
          lng : 126.9786567, 
      }, 
      level : 6,
  })
}

function MapPositionHandle() {
  const [ _, setMapPosition ] = useMapPosition();
  useMapPositionChanged(( position )=>{
    const { center, level } = position;
    setMapPosition({
      center : { lat : center.getLat(), lng : center.getLng() },
      level : level,
    })
  })
  return null;
}

export function MapContainer() {
  const [ position ] = useMapPosition();
  return (
    <Flex w={'100%'} h={'100%'} direction={'column'}  style={{position: 'relative', overflow: 'hidden'}} >
        <Map
            level={position.level}
            center={ new kakao.maps.LatLng(position.center.lat, position.center.lng) }
            style={{ width: "100%", height: "1000%" }}
        >
            <MapPositionHandle/>
            <MapControls/>
        </Map>
    </Flex>
    )
}

