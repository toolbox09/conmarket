import { Action} from './_internal';


export function eachKey<T extends object, K extends keyof T>(obj: T, action : Action<T,K>) {
    
    const keys = Object.keys(obj);
    const size = keys.length;
    for(let index = 0; index < size; index++){
        const key = keys[index] as K;
        action(obj[key],key, obj);
    }
}