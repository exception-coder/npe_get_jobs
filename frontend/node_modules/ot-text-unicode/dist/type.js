"use strict";
/* Text OT!
 *
 * This is an OT implementation for text. It is the standard implementation of
 * text used by ShareJS.
 *
 * This type is composable and by default non-invertable (operations do not by
 * default contain enough information to invert them). Its similar to ShareJS's
 * old text-composable type, but its not invertable and its very similar to the
 * text-tp2 implementation but it doesn't support tombstones or purging.
 *
 * Ops are lists of components which iterate over the document. Components are
 * either:
 *
 * - A number N: Skip N characters in the original document
 * - "str": Insert "str" at the current position in the document
 * - {d:N}: Delete N characters at the current position in the document
 * - {d:"str"}: Delete "str" at the current position in the document. This is
 *   equivalent to {d:N} but provides extra information for operation
 *   invertability.
 *
 * Eg: [3, 'hi', 5, {d:8}]
 *
 * The operation does not have to skip the last characters in the document.
 *
 * Snapshots are by default strings.
 *
 * Cursors are either a single number (which is the cursor position) or a pair
 * of [anchor, focus] (aka [start, end]). Be aware that end can be before start.
 *
 * The actual string type is configurable. The OG default exposed text type uses
 * raw javascript strings, but they're not compatible with OT implementations in
 * other languages because string.length returns the wrong value for unicode
 * characters that don't fit in 2 bytes. And JS strings are quite an inefficient
 * data structure for manipulating lines & UTF8 offsets. For this reason, you
 * can use your own data structure underneath the text OT code.
 *
 * Note that insert operations themselves are always raw strings. Its just
 * snapshots that are configurable.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniSlice = exports.dlen = exports.eachOp = void 0;
const unicount_1 = require("unicount");
const debugMode = false;
/** Check the operation is valid. Throws if not valid. */
const checkOp = (op) => {
    if (!Array.isArray(op))
        throw Error('Op must be an array of components');
    let last = null;
    for (let i = 0; i < op.length; i++) {
        const c = op[i];
        switch (typeof c) {
            case 'object':
                // The only valid objects are {d:X} for +ive values of X or non-empty strings.
                if (typeof c.d !== 'number' && typeof c.d !== 'string')
                    throw Error('Delete must be number or string');
                if (exports.dlen(c.d) <= 0)
                    throw Error('Deletes must not be empty');
                break;
            case 'string':
                // Strings are inserts.
                if (!(c.length > 0))
                    throw Error('Inserts cannot be empty');
                break;
            case 'number':
                // Numbers must be skips. They have to be +ive numbers.
                if (!(c > 0))
                    throw Error('Skip components must be >0');
                if (typeof last === 'number')
                    throw Error('Adjacent skip components should be combined');
                break;
        }
        last = c;
    }
    if (typeof last === 'number')
        throw Error('Op has a trailing skip');
};
// TODO: Consider exposing this at the library level.
// TODO: Also consider rewriting this to use es iterators instead of callback-passing style.
function eachOp(op, fn) {
    let prePos = 0, postPos = 0;
    for (let i = 0; i < op.length; i++) {
        const c = op[i];
        fn(c, prePos, postPos);
        switch (typeof c) {
            case 'object': // Delete
                prePos += exports.dlen(c.d);
                break;
            case 'string': // Insert
                postPos += unicount_1.strPosToUni(c);
                break;
            case 'number': // Skip
                prePos += c;
                postPos += c;
                break;
        }
    }
}
exports.eachOp = eachOp;
function mapOp(op, fn) {
    const newOp = [];
    const append = makeAppend(newOp);
    eachOp(op, (c, prePos, postPos) => {
        append(fn(c, prePos, postPos));
    });
    return trim(newOp);
}
const id = (x) => x;
const normalize = (op) => {
    return mapOp(op, id);
};
/** Check that the given selection range is valid. */
const checkSelection = (selection) => {
    // This may throw from simply inspecting selection[0] / selection[1]. Thats
    // sort of ok, though it'll generate the wrong message.
    if (typeof selection !== 'number'
        && (typeof selection[0] !== 'number' || typeof selection[1] !== 'number')) {
        throw Error('Invalid selection');
    }
};
exports.dlen = (d) => typeof d === 'number' ? d : unicount_1.strPosToUni(d);
/** Make a function that appends to the given operation. */
const makeAppend = (op) => (component) => {
    if (!component || component.d === 0 || component.d === '') {
        // The component is a no-op. Ignore!
    }
    else if (op.length === 0) {
        op.push(component);
    }
    else if (typeof component === typeof op[op.length - 1]) {
        if (typeof component === 'object') {
            // Concatenate deletes. This is annoying because the op or component could
            // contain strings or numbers.
            const last = op[op.length - 1];
            last.d = typeof last.d === 'string' && typeof component.d === 'string'
                ? last.d + component.d // Preserve invert information
                : exports.dlen(last.d) + exports.dlen(component.d); // Discard invert information, if any.
            // (op[op.length - 1] as {d:number}).d += component.d
        }
        else {
            // Concat strings / inserts. TSC should be smart enough for this :p
            op[op.length - 1] += component;
        }
    }
    else {
        op.push(component);
    }
};
/** Get the length of a component */
const componentLength = (c) => (typeof c === 'number' ? c
    : typeof c === 'string' ? unicount_1.strPosToUni(c)
        : typeof c.d === 'number' ? c.d
            : unicount_1.strPosToUni(c.d));
// Does not support negative numbers.
exports.uniSlice = (s, startUni, endUni) => {
    const start = unicount_1.uniToStrPos(s, startUni);
    const end = endUni == null ? Infinity : unicount_1.uniToStrPos(s, endUni);
    return s.slice(start, end);
};
const dslice = (d, start, end) => (typeof d === 'number'
    ? (end == null) ? d - start : Math.min(d, end) - start
    : exports.uniSlice(d, start, end));
/** Makes and returns utility functions take and peek.
 */
const makeTake = (op) => {
    // TODO: Rewrite this by passing a context, like the rust code does. Its cleaner that way.
    // The index of the next component to take
    let idx = 0;
    // The offset into the component. For strings this is in UCS2 length, not
    // unicode codepoints.
    let offset = 0;
    // Take up to length n from the front of op. If n is -1, take the entire next
    // op component. If indivisableField == 'd', delete components won't be separated.
    // If indivisableField == 'i', insert components won't be separated.
    const take = (n, indivisableField) => {
        // We're at the end of the operation. The op has skips, forever. Infinity
        // might make more sense than null here.
        if (idx === op.length)
            return n === -1 ? null : n;
        const c = op[idx];
        let part;
        if (typeof c === 'number') {
            // Skip
            if (n === -1 || c - offset <= n) {
                part = c - offset;
                ++idx;
                offset = 0;
                return part;
            }
            else {
                offset += n;
                return n;
            }
        }
        else if (typeof c === 'string') {
            // Insert
            if (n === -1 || indivisableField === 'i' || unicount_1.strPosToUni(c.slice(offset)) <= n) {
                part = c.slice(offset);
                ++idx;
                offset = 0;
                return part;
            }
            else {
                const offset2 = offset + unicount_1.uniToStrPos(c.slice(offset), n);
                part = c.slice(offset, offset2);
                offset = offset2;
                return part;
            }
        }
        else {
            // Delete
            //
            // So this is a little weird - the insert case uses UCS2 length offsets
            // directly instead of counting in codepoints. Thats more efficient, but
            // more complicated. It only matters for non-invertable ops with huge
            // deletes being composed / transformed by other very complicated ops.
            // Probably not common enough to optimize for. Esp since this is a little
            // bit of a mess anyway, and the tests should iron out any problems.
            if (n === -1 || indivisableField === 'd' || exports.dlen(c.d) - offset <= n) {
                // Emit the remainder of the delete.
                part = { d: dslice(c.d, offset) };
                // part = {d: dlen(c.d) - offset}
                ++idx;
                offset = 0;
                return part;
            }
            else {
                // Slice into the delete content
                let result = dslice(c.d, offset, offset + n);
                offset += n;
                return { d: result };
            }
        }
    };
    // Peek at the next op that will be returned.
    const peek = () => op[idx];
    return { take, peek };
};
/** Trim any excess skips from the end of an operation.
 *
 * There should only be at most one, because the operation was made with append.
 */
const trim = (op) => {
    if (op.length > 0 && typeof op[op.length - 1] === 'number') {
        op.pop();
    }
    return op;
};
/** Transform op by otherOp.
 *
 * @param op - The operation to transform
 * @param otherOp - Operation to transform it by
 * @param side - Either 'left' or 'right'
 */
function transform(op1, op2, side) {
    if (side !== 'left' && side !== 'right') {
        throw Error("side (" + side + ") must be 'left' or 'right'");
    }
    checkOp(op1);
    checkOp(op2);
    const newOp = [];
    const append = makeAppend(newOp);
    const { take, peek } = makeTake(op1);
    for (let i = 0; i < op2.length; i++) {
        const c2 = op2[i];
        let length, c1;
        switch (typeof c2) {
            case 'number': // Skip
                length = c2;
                while (length > 0) {
                    c1 = take(length, 'i');
                    append(c1);
                    if (typeof c1 !== 'string') {
                        length -= componentLength(c1);
                    }
                }
                break;
            case 'string': // Insert
                if (side === 'left') {
                    // The left insert should go first.
                    if (typeof peek() === 'string') {
                        append(take(-1));
                    }
                }
                // Otherwise skip the inserted text.
                append(unicount_1.strPosToUni(c2));
                break;
            case 'object': // Delete
                length = exports.dlen(c2.d);
                while (length > 0) {
                    c1 = take(length, 'i');
                    switch (typeof c1) {
                        case 'number':
                            length -= c1;
                            break;
                        case 'string':
                            append(c1);
                            break;
                        case 'object':
                            // The delete is unnecessary now - the text has already been deleted.
                            length -= exports.dlen(c1.d);
                    }
                }
                break;
        }
    }
    // Append any extra data in op1.
    let c;
    while ((c = take(-1)))
        append(c);
    if (debugMode && isInvertible(op1) && isInvertible(op2) && !isInvertible(newOp)) {
        throw Error('Internal error - composed operation should also be invertible');
    }
    return trim(newOp);
}
/** Compose op1 and op2 together and return the result */
function compose(op1, op2) {
    checkOp(op1);
    checkOp(op2);
    const result = [];
    const append = makeAppend(result);
    const { take } = makeTake(op1);
    for (let i = 0; i < op2.length; i++) {
        const component = op2[i];
        let length, chunk;
        switch (typeof component) {
            case 'number': // Skip
                length = component;
                while (length > 0) {
                    chunk = take(length, 'd');
                    append(chunk);
                    if (typeof chunk !== 'object') {
                        length -= componentLength(chunk);
                    }
                }
                break;
            case 'string': // Insert
                append(component);
                break;
            case 'object': // Delete
                length = exports.dlen(component.d); // Length of the delete we're doing
                let offset = 0; // Offset into our deleted content
                while (offset < length) {
                    chunk = take(length - offset, 'd');
                    switch (typeof chunk) {
                        case 'number':
                            // We're deleting the skipped characters.
                            append({ d: dslice(component.d, offset, offset + chunk) });
                            offset += chunk;
                            break;
                        case 'string':
                            offset += unicount_1.strPosToUni(chunk);
                            break;
                        case 'object':
                            append(chunk);
                    }
                }
                break;
        }
    }
    let c;
    while ((c = take(-1)))
        append(c);
    if (debugMode && isInvertible(op1) && isInvertible(op2) && !isInvertible(result)) {
        throw Error('Internal error - composed operation should also be invertible');
    }
    return trim(result);
}
// This operates in unicode offsets to make it consistent with the equivalent
// methods in other languages / systems.
const transformPosition = (cursor, op) => {
    let pos = 0;
    for (let i = 0; i < op.length && cursor > pos; i++) {
        const c = op[i];
        // I could actually use the op_iter stuff above - but I think its simpler
        // like this.
        switch (typeof c) {
            case 'number': { // skip
                pos += c;
                break;
            }
            case 'string': // insert
                // Its safe to use c.length here because they're both utf16 offsets.
                // Ignoring pos because the doc doesn't know about the insert yet.
                const offset = unicount_1.strPosToUni(c);
                pos += offset;
                cursor += offset;
                break;
            case 'object': // delete
                cursor -= Math.min(exports.dlen(c.d), cursor - pos);
                break;
        }
    }
    return cursor;
};
const transformSelection = (selection, op) => (typeof selection === 'number'
    ? transformPosition(selection, op)
    : selection.map(s => transformPosition(s, op)));
function makeInvertible(op, doc, ropeImpl) {
    return mapOp(op, (c, prePos) => ((typeof c === 'object' && typeof c.d === 'number') // Delete
        ? { d: ropeImpl.slice(doc, prePos, prePos + c.d) }
        : c));
}
/** Attempt to invert the operation. Operations with {d:N} components cannot be inverted, and this method will throw. */
function invert(op) {
    return mapOp(op, c => {
        switch (typeof c) {
            case 'object': // Delete
                if (typeof c.d === 'number') {
                    throw Error('Cannot invert text op: Deleted characters missing from operation. makeInvertible must be called first.');
                }
                else
                    return c.d; // delete -> insert
            case 'string': return { d: c }; // Insert -> delete
            case 'number': return c; // skip -> skip
        }
    });
}
/** Strip extraneous invertibility information from the operation */
function stripInvertible(op) {
    return mapOp(op, c => ((typeof c === 'object' && typeof c.d === 'string')
        ? { d: unicount_1.strPosToUni(c.d) }
        : c));
}
/** Helper method. returns true if the operation can be successfully inverted. */
function isInvertible(op) {
    let invertible = true;
    eachOp(op, c => {
        if (typeof c === 'object' && typeof c.d === 'number')
            invertible = false;
    });
    return invertible;
}
function makeType(ropeImpl) {
    return {
        name: 'text-unicode',
        uri: 'http://sharejs.org/types/text-unicode',
        trim,
        normalize,
        checkOp,
        /** Create a new text snapshot.
         *
         * @param {string} initial - initial snapshot data. Optional. Defaults to ''.
         * @returns {Snap} Initial document snapshot object
         */
        create(initial = '') {
            if (typeof initial !== 'string') {
                throw Error('Initial data must be a string');
            }
            return ropeImpl.create(initial);
        },
        /** Apply an operation to a document snapshot
         */
        apply(str, op) {
            checkOp(op);
            const builder = ropeImpl.builder(str);
            for (let i = 0; i < op.length; i++) {
                const component = op[i];
                switch (typeof component) {
                    case 'number':
                        builder.skip(component);
                        break;
                    case 'string':
                        builder.append(component);
                        break;
                    case 'object':
                        builder.del(exports.dlen(component.d));
                        break;
                }
            }
            return builder.build();
        },
        transform,
        compose,
        transformPosition,
        transformSelection,
        isInvertible,
        makeInvertible(op, doc) { return makeInvertible(op, doc, ropeImpl); },
        stripInvertible,
        invert,
        invertWithDoc(op, doc) { return invert(makeInvertible(op, doc, ropeImpl)); },
        isNoop: (op) => op.length === 0
    };
}
exports.default = makeType;
