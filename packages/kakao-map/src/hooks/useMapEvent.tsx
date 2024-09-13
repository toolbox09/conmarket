import { useEffect } from 'react';
import { useMap } from '../internal';

type EventFun = ( e : kakao.maps.event.EventTarget ) => void | Promise<void> ;
type MouseFun = ( e : kakao.maps.event.MouseEvent ) => void | Promise<void>;
export type EventCallbackFun = EventFun | MouseFun;

export interface UseMapEventProps {
    activate? : boolean;
    type : string;
    callback : EventCallbackFun;
}




export function useMapEvent( {
    activate = true,
    type,
    callback,
} : UseMapEventProps ){

    const map = useMap();
    useEffect(()=>{
        activate ? 
            kakao.maps.event.addListener(map, type, callback ) : 
            kakao.maps.event.removeListener( map, type, callback);
        
        return () => {
            kakao.maps.event.removeListener( map, type,  callback);
        }
    },[activate, callback])

    return null; 
}


export type UseTargetProps = Omit<UseMapEventProps,'type'>;
