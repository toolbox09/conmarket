import { Predicate } from './_internal';
import { keyOf } from './keyOf';

/**
 * 
 * @param obj 
 * @returns 
 */
export function sizeKey<T extends object>( obj : T ) {
    return Object.keys(obj).length;
}