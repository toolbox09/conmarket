import {
    Position,
    Geometry,
    GeoJsonProperties,
    Point,
    MultiPoint,
    LineString,
    MultiLineString,
    Polygon,
    MultiPolygon,
    Feature,
    FeatureCollection
} from 'geojson';

export function createPoint( positions : Position ) : Point {
    return { type : 'Point', coordinates : positions };
}

export function createMultiPoint( positions : Position[] ) : MultiPoint {
    return { type : 'MultiPoint', coordinates : positions };
}

export function createLineString( positions : Position[] ) : LineString {
    return { type : 'LineString', coordinates : positions };
}

export function createMultiLineString( positions : Position[][] ) : MultiLineString {
    return { type : 'MultiLineString', coordinates : positions };
}

export function createPolygon( positions : Position[][] ) : Polygon {
    return { type : 'Polygon', coordinates : positions };
}

export function createMultiPolygon( positions : Position[][][] ) : MultiPolygon {
    return { type : 'MultiPolygon', coordinates : positions };
}

export function createFeature( geometry : Geometry, properties : GeoJsonProperties ) : Feature {
    return { type : 'Feature', geometry : geometry, properties : properties };
}

export function createFeatureCollection( features : Feature[] ) : FeatureCollection {
    return { type : 'FeatureCollection', features : features };
}