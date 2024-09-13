import { Action } from './_internal';

export function each<T>( array : T[], action : Action<T> ) {
    const size = array.length;
    for(let index = 0; index < size; index++ ){
        const element = array[index];
        if(element) {
            action( element, index, array );
        }

    }
}
