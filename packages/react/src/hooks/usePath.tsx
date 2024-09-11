import { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { compact } from '@repo/es';

export function usePath( index : number ) {
    const [ path, setPath ] = useState<string>();
    const location = useLocation();

    useEffect(()=>{
        const paths = compact(location.pathname.split('/'));
        if(paths && paths.length > index ) {
            setPath(paths[index]);
        }
    },[location])


    return path;
}