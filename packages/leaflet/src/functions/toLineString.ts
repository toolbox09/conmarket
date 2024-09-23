import { createLineString } from '@repo/geojson';
import { LatLng } from 'leaflet';
import { toPositions } from './toPositions';

export function toLineString( ...latLngs : LatLng[] ) {
    return createLineString(toPositions(latLngs));
}