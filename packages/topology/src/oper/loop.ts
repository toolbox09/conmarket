import { GeoJsonObject, Position, LineString, MultiLineString, Polygon, MultiPolygon,  GeometryCollection ,Feature, FeatureCollection, MultiPoint, Point, Geometry } from 'geojson';


export function geometryEach(geojson : GeoJsonObject, func : ( geometry : Geometry ) => void) {

    switch(geojson.type) {
        case 'Point' : {
            func(geojson as Point);
        }break;

        case 'MultiPoint' : {
            func(geojson as MultiPoint);
        }break;

        case 'LineString' : {
            func(geojson as LineString);
        }break;

        case 'MultiLineString' : {
            func(geojson as MultiLineString);
        }break;

        case 'Polygon' : {
            func(geojson as Polygon);
        }break;

        case 'MultiPolygon' : {
            func(geojson as MultiPolygon);
        }break;

        case 'GeometryCollection' :{
            (geojson as GeometryCollection).geometries.forEach( geom => {
                func(geom);
            });
        }break;

        case 'Feature' : {
            geometryEach((geojson as Feature).geometry,func);
        }break;
        
        case 'FeatureCollection' : {
            (geojson as FeatureCollection).features.forEach( feature => geometryEach((feature as Feature),func));
        }break;
    }
}



export const linesEach = (geojson : GeoJsonObject, func : ( lines : Position[] ) => void ) :  void => {

    switch(geojson.type) {
        case 'Point' : return undefined;

        case 'MultiPoint' : return undefined;

        case 'LineString' : {
            func( (geojson as LineString).coordinates );
        }break;

        case 'MultiLineString' : {
            (geojson as MultiLineString).coordinates.forEach(coord =>{
                func(coord);
            })
        }break;

        case 'Polygon' : {
            (geojson as Polygon).coordinates.forEach(coord =>{
                func(coord);
            });
        }break;

        case 'MultiPolygon' : {
            (geojson as MultiPolygon).coordinates.forEach(coords => {
                coords.forEach( coord => {
                    func(coord);
                });
            });
        }break;

        case 'GeometryCollection' : {
            const geomtries = geojson as GeometryCollection;
            if(geomtries && geomtries.geometries) {
                geomtries.geometries.forEach( geomtry => {
                    linesEach(geomtry, func );
                });
            }
        } break;

        case 'Feature' : {
            linesEach( ( geojson as Feature ).geometry, func );
        }break;

        case 'FeatureCollection' : {
            const features = geojson as FeatureCollection;
            if(features && features.features) {
                features.features.forEach( feature => {
                    linesEach(feature, func );
                } )
            }
        }
    }
}

export function coordinatesEach(geojson : GeoJsonObject, func : ( coord : Position ) => void ) {
    switch(geojson.type) {
        case 'Point' : {
            func((geojson as Point).coordinates);
        }break;

        case 'MultiPoint' : {
            (geojson as MultiPoint).coordinates.forEach( p0=>func(p0));
        }break;

        case 'LineString' : {
            (geojson as LineString).coordinates.forEach( p0=>func(p0));
        }break;

        case 'MultiLineString' : {
            (geojson as MultiLineString).coordinates.forEach( p0 => p0.forEach( p1=>func(p1 ) ));
        }break;

        case 'Polygon' : {
            (geojson as Polygon).coordinates.forEach( p0 => p0.forEach( p1=>func(p1 ) ));
        }break;

        case 'MultiPolygon' : {
            (geojson as MultiPolygon).coordinates.forEach(p0=>p0.forEach( p1=> p1.forEach(p2=>func(p2))));
        }break;

        case 'GeometryCollection' :{
            (geojson as GeometryCollection).geometries.forEach( geom => coordinatesEach(geom,func));
        }break;

        case 'Feature' : {
            coordinatesEach((geojson as Feature).geometry,func);
        }break;
        case 'FeatureCollection' : {
            (geojson as FeatureCollection).features.forEach( feature => coordinatesEach(feature, func));
        }break;
    }
}


export function featureEach(features : FeatureCollection, func : ( feature : Feature ) => void ) {
    if(features.features) {
        features.features.forEach( f => func(f) )
    }
}
