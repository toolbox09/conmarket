import { TileLayer } from 'react-leaflet';
import { EPSG5181 } from '../crs/epgs-5181';

import 'leaflet/dist/leaflet.css';
import "proj4";
import "proj4leaflet";


export const KakaoMap = ( { url } : { url : string } ) => {
    return (
        <TileLayer
            attribution='&copy; <a href="https://map.kakao.com">KakaoMap</a> contributors'
            // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            url={url}
            minZoom={0}
            maxZoom={13}
            zoomReverse={true}
            zoomOffset={1}
            subdomains='0123'
            // continuousWorld={true}
            tms={true}
        />
    )
}

KakaoMap.CRS = EPSG5181;
KakaoMap.ImageMap = function () { return <KakaoMap url={'https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNGSD01/v18_qqn7d/{z}/{y}/{x}.png' }/> }
// KakaoMap.SkyviewMap = KakaoMap( { url : 'https://map2.daumcdn.net/map_skyview/L{z}/{y}/{x}.jpg?v=160114' });
// KakaoMap.UseMap = KakaoMap( { url : 'https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNGSD_CAD01/v15_xiqhg/{z}/{y}/{x}.png' });
// KakaoMap.RoadMap = KakaoMap( { url : 'https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNGSD_RV01/v16_o9kb2/{z}/{y}/{x}.png' });

