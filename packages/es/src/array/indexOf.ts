import { Predicate} from './_internal';


export function indexOf<T>(array : T[], predicate : Predicate<T> ) {
    const size = array.length;
    for( let index = 0; index < size; index++ ) {
        const target = array[index];
        if(target && predicate(target, index, array))
            return index;
    }
    return -1;
}