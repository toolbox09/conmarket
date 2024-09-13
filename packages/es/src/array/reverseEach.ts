import { Action } from './_internal';

export function reverseEach<T>( array : T[], action : Action<T> ) {
    const size = array.length;
    for( let index = size; index > 0; index--  ){
        const element = array[index-1];
        if(element) {
            action( element, index-1, array );
        }
    }
}
