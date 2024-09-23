import { Coordinate, LatLng } from '../internal';

export class Bound {

    public minX : number;
    public maxX : number;
    public minY : number;
    public maxY : number;

    get sw() { return new LatLng( this.minY, this.minX ); }
    get ne() { return new LatLng( this.maxY, this.maxX ); }

    public constructor(minX : number, maxX : number, minY : number, maxY : number) {
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
    }
}