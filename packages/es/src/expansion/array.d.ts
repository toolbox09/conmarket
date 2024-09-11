interface Array<T> {

    /**
     * 중복값을 제거합니다.
     * @example
     * const array = [1, 2, 2, 3, 4, 4, 5];
     * const result = uniq(array);
     * 결과값 : result = [1, 2, 3, 4, 5]
     */
    uniq() : T[];
}