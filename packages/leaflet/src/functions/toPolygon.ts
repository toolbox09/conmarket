import { createPolygon } from '@repo/geojson';
import { mapBy } from '@repo/es';
import { LatLng } from 'leaflet';
import { toPositions } from './toPositions';

export function toPolygon( ...latLngs : LatLng[][] ) {
    return createPolygon(mapBy(latLngs, latLng => toPositions(latLng)));
}