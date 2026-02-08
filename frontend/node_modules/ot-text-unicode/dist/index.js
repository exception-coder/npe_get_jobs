"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = exports.remove = exports.insert = void 0;
// This is an implementation of the text OT type built on top of JS strings.
// You would think this would be horribly inefficient, but its surpringly
// good. JS strings are magic.
const unicount_1 = require("unicount");
const type_1 = __importStar(require("./type"));
const api_1 = __importDefault(require("./api"));
const ropeImplUnicodeString = {
    create(s) { return s; },
    toString(s) { return s; },
    builder(oldDoc) {
        if (typeof oldDoc !== 'string')
            throw Error('Invalid document snapshot: ' + oldDoc);
        const newDoc = [];
        return {
            skip(n) {
                let offset = unicount_1.uniToStrPos(oldDoc, n);
                if (offset > oldDoc.length)
                    throw Error('The op is too long for this document');
                newDoc.push(oldDoc.slice(0, offset));
                oldDoc = oldDoc.slice(offset);
            },
            append(s) {
                newDoc.push(s);
            },
            del(n) {
                oldDoc = oldDoc.slice(unicount_1.uniToStrPos(oldDoc, n));
            },
            build() { return newDoc.join('') + oldDoc; },
        };
    },
    slice: type_1.uniSlice,
};
const textString = type_1.default(ropeImplUnicodeString);
const type = Object.assign(Object.assign({}, textString), { api: api_1.default });
exports.type = type;
exports.insert = (pos, text) => (text.length === 0
    ? []
    : pos === 0 ? [text] : [pos, text]);
exports.remove = (pos, textOrLen) => (type_1.dlen(textOrLen) === 0
    ? []
    : pos === 0 ? [{ d: textOrLen }] : [pos, { d: textOrLen }]);
var type_2 = require("./type");
Object.defineProperty(exports, "makeType", { enumerable: true, get: function () { return type_2.default; } });
