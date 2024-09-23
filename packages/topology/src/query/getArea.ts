import { Geometry, Position, GeoJsonObject } from 'geojson';
import { geometryEach } from '../internal';
import { sumBy } from '@repo/es';

function ofRingSigned( ring : Position[] ) {
    if (ring.length < 3) {
        return 0.0
    }

    let sum = 0.0;
    const x0 = ring[0]![0]!;
    for (let i = 1; i < ring.length - 1; i++) {
      const x = ring[i]![0]! - x0;
      const y1 = ring[i + 1]![1]!;
      const y2 = ring[i - 1]![1]!;
      sum += x * (y2 - y1);
    }
    return sum / 2.0;
}

function ofRing( ring : Position[] ) {
    return Math.abs(ofRingSigned(ring));
}

function ofRings(rings : Position[][]) {
    if(rings.length === 0) return 0;

    let oa = ofRing(rings[0]!);
    const size = rings.length;
    for( let index = 1;  index < size; index++ ){
        oa -= ofRing(rings[index]!);
    }
    return oa;
}

function ofGeometry( geom : Geometry ) {
    switch( geom.type ) {
        case 'Polygon' : return ofRings(geom.coordinates);
        case 'MultiPolygon' : return sumBy( geom.coordinates, _ => ofRings(_));
        default : return 0;
    }
}

export function getArea( geojson : GeoJsonObject ) {
    let area = 0;
    geometryEach( geojson, geom => {
        area += ofGeometry(geom);
    })
    return area;
}