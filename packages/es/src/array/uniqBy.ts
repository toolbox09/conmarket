import { Selector } from './_internal';
import { uniq } from './uniq';
import { mapBy } from './mapBy';

export function uniqBy<T,R>( array : readonly T[], selecter : Selector<T,R> ) {
    return uniq(mapBy( array, selecter ));
}