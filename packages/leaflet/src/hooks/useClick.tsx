import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';


export interface UseClickProps {
    callback? : ( e : LeafletMouseEvent ) => void;
}

export function useClick( callback  : ( e : LeafletMouseEvent ) => void ) {
    const map = useMap();
    useEffect(()=>{
        map.addEventListener('click',callback);
        return () => {
            map.removeEventListener('click', callback);
        }
    },[callback])
    return null;
}