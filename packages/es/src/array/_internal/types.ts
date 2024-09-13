export type ElementFun<T, R> = ( value : T, index : number, array : T[] ) => R;
export type Predicate<T> = ElementFun<T,boolean>;
export type Action<T> = ElementFun<T,void>;
export type Selector<T, R> = (  value : T, index : number, source : readonly T[]  ) => R;