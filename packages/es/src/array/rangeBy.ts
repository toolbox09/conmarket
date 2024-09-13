import { Selector } from './_internal';
import { mapBy  } from './mapBy';
import { range  } from './range';

/**
 * 
 * @param array 
 * @param selector 
 * @returns 
 */
export function rangeBy<T>( array : T[], selector : Selector<T, number>) {
    return range(mapBy(array, selector));
}