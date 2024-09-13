import { Selector } from './_internal';
import { eachKey } from './eachKey';



export function mapKey<T extends object, K extends keyof T, R>(obj: T, selector: Selector<T,K,R>): R[] {

    const result = new Array<R>();
    eachKey(obj,( value, key, source )=>{
        const r = selector(value as any, key as any, source);
        result.push(r);
    })
    return result;
  }