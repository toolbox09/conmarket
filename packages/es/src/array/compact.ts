type NotFalsey<T> = Exclude<T, false | null | 0 | '' | undefined>;


/**
 * 배열의 빈내용을 제거합니다.
 * @param arr 
 * @returns 
 * @example
 * compact([0, 1, false, 2, '', 3, null, undefined, 4, NaN, 5]);
 * Returns: [1, 2, 3, 4, 5]
 */
export function compact<T>(arr: readonly T[]): Array<NotFalsey<T>> {
  const result: Array<NotFalsey<T>> = [];

  for (const item of arr) {
    if (item) {
      result.push(item as NotFalsey<T>);
    }
  }

  return result;
}