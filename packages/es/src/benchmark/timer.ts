
/**
 * 실생시간을 측정하는 함수를 생성합니다.
 * @param this 
 * @param fn 
 * @param endCallback 
 * @returns 
 */
export function timer<T extends Function>(this: unknown, fn: T, endCallback? : ( time : number ) => void ) {
    const _this = this;
    const _start = Date.now();
    let result : unknown;
    return function () {
		try {
			result = fn.apply(_this, arguments);
		} finally {
            if(endCallback) {
                endCallback( Date.now() - _start );
            }
		}
        return result;
    } as unknown as T;
}
