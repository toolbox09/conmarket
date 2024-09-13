
/**
 * 첫글자를 대문자로 만든다.
 * @param str 
 * @returns 
 * @example
 * const result = capitalize('fred') // returns 'Fred'
 * const result2 = capitalize('FRED') // returns 'Fred'
 */
export const capitalize = <T extends string>(str: T): Capitalize<T> => {
    return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()) as Capitalize<T>;
};