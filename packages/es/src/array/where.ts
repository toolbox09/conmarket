import { Predicate } from './_internal';
import { each } from './each';


export function where<T>( array : T[], predicate : Predicate<T> ) {
    const results = new Array<T>();
    each( array, ( value, index, array  ) => {
        if( predicate(value, index, array ) ){
            results.push(value);
        }
    })
    return results;
}