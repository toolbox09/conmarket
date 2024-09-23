import { Position } from 'geojson';
import { LatLng } from 'leaflet';


export function toPosition( latLng : LatLng ) : Position{
    return [ latLng.lng, latLng.lat ];
}