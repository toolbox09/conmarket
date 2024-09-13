import { each } from './each';

/**
 * 
 * @param array 
 * @param selector 
 * @returns 
 */
export function sum<T extends number>( array : T[] ) {
    let result = 0;
    each(array,  value => {
        result += value;
    })
    return result;
}
