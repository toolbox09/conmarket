import { LatLng } from 'leaflet';
import { toPosition } from './toPosition';
import { mapBy } from '@repo/es';


export function toPositions( latLngs : LatLng[] ) {
    return mapBy( latLngs, latLng => toPosition(latLng));
}