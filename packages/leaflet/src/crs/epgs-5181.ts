import * as L from 'leaflet';
import "proj4";
import 'proj4leaflet';

export const EPSG5181 = new L.Proj.CRS(
    'EPSG:5181',
    '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
    {
        resolutions: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25],
        origin: [-30000, -60000],
        bounds: L.bounds([-30000-Math.pow(2,19)*4, -60000], [-30000+Math.pow(2,19)*5, -60000+Math.pow(2,19)*5])
    }          
);
