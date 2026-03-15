"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deepClone(old) {
    if (old === null)
        return null;
    if (Array.isArray(old)) {
        return old.map(deepClone);
    }
    else if (typeof old === 'object') {
        const o = {};
        for (let k in old)
            o[k] = deepClone(old[k]);
        return o;
    }
    else {
        // Everything else in JS is immutable.
        return old;
    }
}
exports.default = deepClone;
//# sourceMappingURL=deepClone.js.map