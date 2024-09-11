import { uniq, compact } from '../internal';

Array.prototype.uniq = function () {
    return uniq(this);
};

Array.prototype.compact = function () {
    return compact(this);
};