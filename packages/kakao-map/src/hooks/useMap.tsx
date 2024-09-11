import { useContext } from 'react';
import { MapContext } from '../internal';


export function useMap() {
    return useContext(MapContext);
}