import { Selector } from './_internal';

/**
 * 
 * @param array 
 * @param selector 
 * @returns 
 */
export function mapBy<T, R>( array : readonly T[], selector : Selector<T,R> ) {
    return array.map( (item ,index) => selector(item, index, array) )
}