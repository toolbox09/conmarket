import { useMapEvent, EventCallbackFun } from '../internal';


export const useMouseMove = ( callback : EventCallbackFun,  activate? : boolean ) => useMapEvent( { type : 'mousemove', callback : callback, activate : activate  } );