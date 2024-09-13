import { Predicate } from './_internal';
import { indexOf } from './indexOf';

export function remove<T>(array : T[], condition : Predicate<T>) {
    const index = indexOf(array, condition);
    if(index > -1) {
        array.splice(index, 1);
    }
    return array;
}