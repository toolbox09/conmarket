import { Map, useMap, useMapPositionChanged } from '@repo/kakao-map';
import { useLocalStorage } from '@repo/react';

interface MapPosition {
  center : { lat : number, lng : number },
  level : number,
}

export function useMapPosition() {
  return useLocalStorage<MapPosition>('chub-map-position',{
      center : {
        lng : 126.9786567, 
        lat : 37.566826, 
      },
      level : 6,
  })
}

export function MapPositionHandle() {
  const [ _, setPosition ] = useMapPosition();
  useMapPositionChanged( ( position )=>{
    setPosition({
      center : position.center,
      level : position.level,
     })
  })
  return null;
}

export function MapContainer() {
  const [ position ] = useMapPosition();

  return (
      <Map
          level={position.level}
          center={ position.center }
          style={{ width: "500px", height: "500px" }}
      >
        <MapPositionHandle/>
      </Map>
  )
  
}

export function App() {

  function handle(){
    console.log([1,2,3,4,4,5].uniq());
  }
  return (
    <>
      <button onClick={handle} >눌러</button>
      <MapContainer/>
    </>
  )
}
