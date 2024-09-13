import { uniq, compact, isExist, Predicate } from '../internal';

Array.prototype.uniq = function () {
    return uniq(this);
};

Array.prototype.compact = function () {
    return compact(this);
};

Array.prototype.isExist = function <T>(predicate : Predicate<T> ) {
    return isExist(this, predicate);
};
