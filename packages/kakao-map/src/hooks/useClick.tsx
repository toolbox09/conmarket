import { useMapEvent, EventCallbackFun } from '../internal';


export const useClick = ( callback : EventCallbackFun,  activate? : boolean ) => useMapEvent( { type : 'click', callback : callback, activate : activate  } );