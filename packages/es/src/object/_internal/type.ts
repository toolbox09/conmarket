export type Selector<T extends object, K extends keyof T, R> = (value: T[K], key: K, obj: T ) => R;
export type Action<T extends object, K extends keyof T> = (value: T[K], key: K, obj: T) => void;
export type Predicate<T extends object, K extends keyof T> = (value: T[K], key: K, obj: T) => boolean;