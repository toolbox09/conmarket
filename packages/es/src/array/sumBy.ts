import { Selector } from './_internal';
import { sum } from './sum';
import { mapBy } from './mapBy';

/**
 * 
 * @param array 
 * @param selector 
 * @returns 
 */
export function sumBy<T,R extends number>( array : readonly T[],  selector : Selector<T, R>  ) {
    return sum( mapBy( array, selector ));
}
