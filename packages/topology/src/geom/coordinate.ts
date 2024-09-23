import { LatLng } from '../internal';


export class Coordinate {

    public x : number;
    public y : number;

    public constructor( x : number, y : number ) {
        this.x = x;
        this.y = y;
    }

    public toLatLng() {
        return new LatLng( this.y, this.x );
    }
}