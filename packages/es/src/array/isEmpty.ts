

/**
 * 
 * @param array 
 * @returns 
 */
export function isEmpty<T>(array? : T[]) {
    return ( array === undefined || array == null || array.length === 0);
}