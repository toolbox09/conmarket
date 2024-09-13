

export function toRecord<T, K extends keyof T>( array : T[], key : K ) : Record<K, T> {
    const map = {} as any;
    array.forEach( obj =>{
        map[obj[key]] = obj;
    })
    return map as Record<K, T>;
}