import { useMapEvent, EventCallbackFun } from '../internal';

export const useRightClick = ( callback : EventCallbackFun,  activate? : boolean ) => useMapEvent( { type : 'rightclick', callback : callback, activate : activate  } );