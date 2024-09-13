import { Selector } from './_internal';
import { reverseEach } from './reverseEach';

/**
 * 
 * @param array 
 * @param selector 
 * @returns 
 */
export function reverseMapBy<T, R>( array : T[], selector : Selector<T,R> ) {
    const results = new Array<R>();
    reverseEach( array, ( obj , index, source) => {
        const value = selector(obj, index, source );
        if(value){
            results.push(value);
        }
    })
    return results;
}