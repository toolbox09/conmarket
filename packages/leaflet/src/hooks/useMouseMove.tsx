import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';


export interface UseMouseMove {
    callback? : ( e : LeafletMouseEvent ) => void;
}

export function useMouseMove( callback  : ( e : LeafletMouseEvent ) => void ) {
    const map = useMap();
    useEffect(()=>{
        map.addEventListener('mousemove',callback);
        return () => {
            map.removeEventListener('mousemove', callback);
        }
    },[callback])
    return null;
}