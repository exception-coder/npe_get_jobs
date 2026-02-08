"use strict";
// This is a simple logging function which prints things a lot prettier than
// console.log in node. The signature is the same.
Object.defineProperty(exports, "__esModule", { value: true });
function log(...args) {
    if (log.quiet)
        return;
    const { inspect } = require('util');
    const f = (a) => (typeof a === 'string') ?
        a : inspect(a, { depth: 10, colors: true });
    const prefix = Array(log.prefix).fill('  ').join('');
    console.log(prefix + args.map(f).join(' '));
}
exports.default = log;
log.quiet = true;
log.prefix = 0;
//# sourceMappingURL=log.js.map