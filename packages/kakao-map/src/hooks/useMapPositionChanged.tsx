import { useEffect } from 'react';
import { useThrottledState } from '@repo/react';
import { useMap } from '../internal';

export interface MapPosition {
    center : kakao.maps.LatLng;
    level : number;
    bounds : kakao.maps.LatLngBounds;
}

function createMapPosition( map : kakao.maps.Map ) : MapPosition {
    return {
        center : map.getCenter(),
        level : map.getLevel(),
        bounds : map.getBounds(),
    }
}

export function useMapPositionChanged( changed? : ( pos : MapPosition ) => void  ) {
    const map = useMap();
    const [ pos ] = useThrottledState<MapPosition>(createMapPosition(map),500);

    useEffect(()=>{
        function onBoundsChanged() {
            if(changed) {
                changed(createMapPosition(map));
            }
        }

        kakao.maps.event.addListener(map, 'bounds_changed', onBoundsChanged);
        return () => {
            kakao.maps.event.removeListener(map, 'bounds_changed', onBoundsChanged);
        }
    },[changed]);

    return {
        pos,
    }
}
