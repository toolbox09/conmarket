import { uniq } from '../internal';

Array.prototype.uniq = function () {
    return uniq(this);
};