import { ElementFun } from './_internal';
import { each } from './each';

/**
 * 
 * @param array 
 * @param selecter 
 * @returns 
 */
export function groupBy<T, K extends PropertyKey>( array : T[], selecter : ElementFun<T, K> ) : Record<K, T[]> {
    const result = {} as Record<K, T[]>;
    each( array, (value, index, array ) => {
        const key = selecter(value, index, array);
        if( !result[key]  ) {
            result[key] = [];
        }
        result[key].push(value);
    })
    return result;
} 