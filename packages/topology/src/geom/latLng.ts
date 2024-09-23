import { Coordinate } from '../internal';


export class LatLng {

    /** 위도,y축(latitude) */
    public lat : number;
    /** 경도,x축(longitude)*/
    public lng : number;

    public constructor( lat : number, lng : number ) {
        this.lat = lat;
        this.lng = lng;
    }

    public toCoordinate() {
        return new Coordinate(this.lng, this.lat);
    }
}