
type NotFalsey<T> = Exclude<T, false | null | 0 | '' | undefined>;

interface Array<T> {
    uniq() : T[];
    compact<T>(): Array<NotFalsey<T>>;
}