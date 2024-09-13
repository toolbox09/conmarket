import { Predicate } from './_internal';
import { each } from './each';


/**
 * 조건으로 분활 합니다.
 * @param array 
 * @param predicate 
 * @returns 
 * @example
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const [evens, odds] = partition(numbers, num => num % 2 === 0);
 * console.log('짝수:', evens);  // [2, 4, 6, 8, 10]
 * console.log('홀수:', odds);  // [1, 3, 5, 7, 9]
 */
export function partition<T>(array: T[], predicate: Predicate<T>): [T[], T[]] {
    const matched: T[] = [];
    const unmatched: T[] = [];

    each(array, ( value, index, source )=>{
        if(predicate(value, index, source)) {
            matched.push(value);
        }else{
            unmatched.push(value);
        }
    })
    return [matched, unmatched];
}