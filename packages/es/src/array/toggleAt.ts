import { indexOf } from './indexOf';

/**
 * 조건에 해당하는 개체가 있다면 삭제하고 없다면 추가 합니다.
 * @param array 
 * @param element 
 * @param fun 
 * @returns 
 */
export function toggleAt<T>(array : T[], element : T, fun : ( item : T ) => boolean) {
    const result =  [...array];
    const index = indexOf(result, fun);
    if (index !== -1) {
        result.splice(index, 1);
    } else {
        result.push(element);
    }
    return result;
}