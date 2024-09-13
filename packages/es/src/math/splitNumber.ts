
/**
 * 정수부분과 소수부분을 구분합니다.
 * @param number 
 * @returns 
 */
export function splitNumber(number : number) {
    const integer = Math.floor(number);
    const fractional = number - integer;

    return {
        integer,
        fractional
    };
}