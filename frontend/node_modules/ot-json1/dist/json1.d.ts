import { ReadCursor, WriteCursor } from './cursor.js';
import { Doc, Path, JSONOp, JSONOpList, Conflict, ConflictType } from './types.js';
export declare const type: {
    name: string;
    uri: string;
    readCursor: (op: JSONOp) => ReadCursor;
    writeCursor: () => WriteCursor;
    create(data: Doc): Doc;
    isNoop(op: JSONOp): boolean;
    setDebug(val: boolean): void;
    registerSubtype: typeof registerSubtype;
    checkValidOp: typeof checkValidOp;
    normalize: typeof normalize;
    apply: typeof apply;
    transformPosition: typeof transformPosition;
    compose: typeof compose;
    tryTransform: typeof tryTransform;
    transform: typeof transform;
    makeInvertible: typeof makeInvertible;
    invert: typeof invert;
    invertWithDoc: typeof invertWithDoc;
    RM_UNEXPECTED_CONTENT: ConflictType;
    DROP_COLLISION: ConflictType;
    BLACKHOLE: ConflictType;
    transformNoConflict: (op1: JSONOp, op2: JSONOp, side: 'left' | 'right') => JSONOp;
    typeAllowingConflictsPred: (allowConflict: AllowConflictPred) => {
        transform(op1: JSONOp, op2: JSONOp, side: 'left' | 'right'): JSONOp;
        name: string;
        uri: string;
        readCursor: (op: JSONOp) => ReadCursor;
        writeCursor: () => WriteCursor;
        create(data: Doc): Doc;
        isNoop(op: JSONOp): boolean;
        setDebug(val: boolean): void;
        registerSubtype: typeof registerSubtype;
        checkValidOp: typeof checkValidOp;
        normalize: typeof normalize;
        apply: typeof apply;
        transformPosition: typeof transformPosition;
        compose: typeof compose;
        tryTransform: typeof tryTransform;
        makeInvertible: typeof makeInvertible;
        invert: typeof invert;
        invertWithDoc: typeof invertWithDoc;
        RM_UNEXPECTED_CONTENT: ConflictType;
        DROP_COLLISION: ConflictType;
        BLACKHOLE: ConflictType;
        transformNoConflict: (op1: JSONOp, op2: JSONOp, side: 'left' | 'right') => JSONOp;
        typeAllowingConflictsPred: any;
    };
};
export declare const removeOp: (path: Path, value?: boolean) => JSONOp;
export declare const moveOp: (from: Path, to: Path) => JSONOp;
export declare const insertOp: (path: Path, value: Doc) => JSONOp;
export declare const replaceOp: (path: Path, oldVal: Doc, newVal: Doc) => JSONOp;
export declare const editOp: (path: Path, type: Subtype | string, subOp: any, preserveNoop?: boolean) => JSONOp;
declare type Subtype = {
    name: string;
    uri?: string;
    apply(doc: any, op: any): any;
    compose(op1: any, op2: any): any;
    transform(op1: any, op2: any, by: 'left' | 'right'): any;
    isNoop?: (op: any) => boolean;
    invert?: (op: any) => any;
    makeInvertible?: (op: any, doc: any) => any;
    [k: string]: any;
};
declare function registerSubtype(subtype: Subtype | {
    type: Subtype;
    [k: string]: any;
}): void;
declare function checkValidOp(op: JSONOp): void;
declare function normalize(op: JSONOp): JSONOp;
/**
 * Apply op to snapshot. Return the new snapshot.
 *
 * The snapshot is shallow copied as its edited, so the previous snapshot
 * reference is still valid.
 */
declare function apply(snapshot: Doc | undefined, op: JSONOp): string | number | boolean | Doc[] | {
    [k: string]: Doc;
} | null | undefined;
/**
 * Transforms a path by an operation. Eg:
 *
 * ```javascript
 * newPath = transformPosition([3, 'address'], [2, {r: true}])
 * // newPath is [2, 'address']
 * ```
 *
 * This is useful for cursors, for tracking annotations and various other
 * markers which should stick to a single element of the JSON document.
 *
 * transformPosition returns null if the item stored at the path no longer
 * exists in the document after the operation has been applied. Eg:
 *
 * ```javascript
 * assert(transformPosition([2, 'address', 'street'], [2, {r: true}]) === null)
 * ```
 */
declare function transformPosition(path: Path, op: JSONOp): Path | null;
declare function compose(op1: JSONOp, op2: JSONOp): JSONOp;
/**
 * Invert the given operation. Operation must be invertible - which is to say,
 * all removes in the operation must contain all removed content. Note any
 * operation returned from transform() and compose() will have this content
 * stripped.
 *
 * Unless you know what you're doing, I highly recommend calling invertWithDoc()
 * instead.
 */
declare function invert(op: JSONOp): JSONOp;
/**
 * Make an operation invertible. (So, you can call invert(op) after this).
 *
 * This is needed because r:XX contents are optional in an operation, and may be
 * optional in subtypes as well. (Eg text-unicode).
 *
 * This method does two main things:
 *
 * - Fills in r:{} bodies in components by copying data in from the document
 * - Recursively calls makeInvertible on any types embedded in the operation.
 *
 * Note transform (and compose?) discards remove information, so if you call
 * transform on an invertible operation you will need to call makeInvertible
 * again before inverting.
 */
declare function makeInvertible(op: JSONOp, doc: Doc): JSONOp;
/**
 * Invert the given operation in the context of the passed document. The
 * specified document must be the document *before* the operation has been
 * applied.
 */
declare function invertWithDoc(op: JSONOp, doc: Doc): JSONOp;
declare function tryTransform(op1: JSONOp, op2: JSONOp, direction: 'left' | 'right'): {
    ok: true;
    result: JSONOp;
} | {
    ok: false;
    conflict: Conflict;
};
declare function transform(op1: JSONOp, op2: JSONOp, side: 'left' | 'right'): JSONOpList | null | undefined;
declare type AllowConflictPred = (c: Conflict) => boolean;
export {};
