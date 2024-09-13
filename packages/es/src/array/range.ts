import { each } from './each';

/**
 * 
 * @param array 
 * @returns 
 */
export function range<T extends number>(array : T[]) {
    if(!array || array.length === 0) {
        return { min : 0, max : 0 }
    }

    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    each( array, ( value )=>{
        if(value) {
            min = Math.min(min, value);
            max = Math.max(max, value);
        }
    })
    return { min, max }
}
