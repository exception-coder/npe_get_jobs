"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Text document API for the 'text' type. This implements some standard API
// methods for any text-like type, so you can easily bind a textarea or
// something without being fussy about the underlying OT implementation.
//
// The API is desigend as a set of functions to be mixed in to some context
// object as part of its lifecycle. It expects that object to have getSnapshot
// and submitOp methods, and call _onOp when an operation is received.
//
// This API defines:
//
// - getLength() returns the length of the document in characters
// - getText() returns a string of the document
// - insert(pos, text, [callback]) inserts text at position pos in the document
// - remove(pos, length, [callback]) removes length characters at position pos
//
// A user can define:
// - onInsert(pos, text): Called when text is inserted.
// - onRemove(pos, length): Called when text is removed.
const type_1 = require("./type");
const unicount_1 = require("unicount");
function api(getSnapshot, submitOp) {
    return {
        // Returns the text content of the document
        get: getSnapshot,
        // Returns the number of characters in the string
        getLength() { return getSnapshot().length; },
        // Insert the specified text at the given position in the document
        insert(pos, text, callback) {
            const uniPos = unicount_1.strPosToUni(getSnapshot(), pos);
            return submitOp([uniPos, text], callback);
        },
        remove(pos, lengthOrContent, callback) {
            const uniPos = unicount_1.strPosToUni(getSnapshot(), pos);
            return submitOp([uniPos, { d: lengthOrContent }], callback);
        },
        // When you use this API, you should implement these two methods
        // in your editing context.
        //onInsert: function(pos, text) {},
        //onRemove: function(pos, removedLength) {},
        _onOp(op) {
            type_1.eachOp(op, (component, prePos, postPos) => {
                switch (typeof component) {
                    case 'string':
                        if (this.onInsert)
                            this.onInsert(postPos, component);
                        break;
                    case 'object':
                        const dl = type_1.dlen(component.d);
                        if (this.onRemove)
                            this.onRemove(postPos, dl);
                }
            });
        },
        onInsert: null,
        onRemove: null,
    };
}
exports.default = api;
// This triggers a bug in the typescript compiler, where it generates an
// invalid typescript declaration file.
//api.provides = {text: true}
;
api.provides = { text: true };
