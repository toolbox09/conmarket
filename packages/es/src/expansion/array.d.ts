
type NotFalsey<T> = Exclude<T, false | null | 0 | '' | undefined>;
type ElementFun<T, R> = ( value : T, index : number, array : T[] ) => R;
type Predicate<T> = ElementFun<T,boolean>;
type Action<T> = ElementFun<T,void>;
type Selector<T, R> = (  value : T, index : number, source : readonly T[]  ) => R;

interface Array<T> {
    uniq() : T[];
    compact<T>(): Array<NotFalsey<T>>;
    isExist<T>(predicate : Predicate<T> );
}