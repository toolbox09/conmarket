import { useCallback, useEffect } from 'react';
import { KeyboardCode } from '../internal';




// interface UseKeyDownProps {
//     code? : KeyboardCode;
//     callback : ( e : KeyboardEvent) => void;
// }

export function useKeyDown( callback : ( e : KeyboardEvent) => void, code? : KeyboardCode ) {

    const handler = useCallback((e : KeyboardEvent)=>{
        if(code && code !==  e.code) {
            
            return;
        }
        callback(e);
    },[code, callback]);

    useEffect(()=>{
        window.addEventListener('keydown',handler);
        return ()=>{
            window.removeEventListener('keydown', handler);
        }
    },[handler])
}