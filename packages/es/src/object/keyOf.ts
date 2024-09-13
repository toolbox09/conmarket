import { Predicate } from './_internal';

export function keyOf<T extends object, K extends keyof T>( obj : T, predicate : Predicate<T,K> ) {
    const keys = Object.keys(obj);
    const size = keys.length;
    for(let index = 0; index < size; index++){
        const key = keys[index] as K;
        if( predicate(obj[key],key, obj) === true ){
            return key;
        }
    }
}