import { Predicate } from './_internal';
import { indexOf } from './indexOf';


/**
 * 가장첫번째를 얻습니다.
 * @param array 
 * @param predicate 
 * @returns 
 */
export function first<T>( array : T[], predicate : Predicate<T> ) {
    const index =  indexOf( array,  predicate);
    if(index === -1)
        return;

    return array[index];
}