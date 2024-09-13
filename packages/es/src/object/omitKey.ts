
export function omitKey<T extends object, K extends keyof T>(obj: T, ...key : K[]) {
    key.forEach( _ => delete obj[_] );
    return obj;
}