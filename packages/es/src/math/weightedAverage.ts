import { each } from '../internal';
type ValueWeight = { value : number, weight : number };

/**
 * 가중평균을 구합니다.
 * @param array 
 * @param selecter 
 * @returns
 * @example
 * const values = [70, 80, 90];
 * const weights = [0.2, 0.3, 0.5];
 * 
 * const result = weightedAverage(values, weights);
 * console.log(result);  // 결과: 82
 */
export function weightedAverage<T>( array : T[], selecter : ( obj : T, index: number, source : T[] ) => ValueWeight  ) {

    let totalWeight = 0;
    let weightedSum = 0;

    each( array, (obj, index, source )=>{
        const { value, weight } = selecter(obj, index, source);
        weightedSum += value * weight;
        totalWeight += weight;
    })
    return weightedSum / totalWeight;

}