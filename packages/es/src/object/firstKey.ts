import { Predicate } from './_internal';
import { keyOf } from './keyOf';

/**
 * 개체의 조건에 해당하는 첫번째값을 반환 합니다.
 * @param obj 
 * @param predicate 
 * @returns 
 */
export function firstValue<T extends object, K extends keyof T>( obj : T, predicate : Predicate<T,K> ) {
    const key = keyOf(obj, predicate);
    if(key) {
        return obj[key];
    }
}