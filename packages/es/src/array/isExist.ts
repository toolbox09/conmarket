import { Predicate } from './_internal';
import { indexOf } from './indexOf';

/**
 * 존재여부를 확인합니다.
 * @param array 
 * @param predicate 
 * @returns 
 */
export function isExist<T>(array : T[], predicate : Predicate<T> ) {
    return indexOf(array, predicate) !== -1;
}