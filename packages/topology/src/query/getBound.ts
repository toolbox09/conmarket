import { GeoJsonObject } from 'geojson';
import { coordinatesEach, Bound } from '../internal';

/**
 * 
 * @param geojson 
 * @returns 
 */
export function getBound( geojson : GeoJsonObject  ) {
    
    let maxX = Number.MIN_VALUE;
    let minX = Number.MAX_VALUE;
    let maxY = Number.MIN_VALUE;
    let minY = Number.MAX_VALUE;
    let valid = false;
    
    coordinatesEach(geojson, ( coord )=>{
        valid = true;
        maxX = Math.max(coord[0], maxX);
        minX = Math.min(coord[0], minX);

        maxY = Math.max(coord[1], maxY);
        minY = Math.min(coord[1], minY);
    })

    if(valid) {
        return new Bound(minX, maxX, minY, maxY);
    }
}