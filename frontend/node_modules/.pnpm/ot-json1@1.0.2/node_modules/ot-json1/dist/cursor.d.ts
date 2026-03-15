import { Key, JSONOp, JSONOpComponent, JSONOpList, Path } from './types.js';
declare function copyAll(c: JSONOpComponent, w: WriteCursor): void;
export declare const isValidPathItem: (k: Key) => boolean;
declare class Cursor {
    parents: JSONOp[];
    indexes: number[];
    lcIdx: number;
    container: JSONOp;
    idx: number;
    constructor(op?: JSONOp);
    ascend(): void;
    getPath(): Path;
}
export declare class ReadCursor extends Cursor {
    get(): (string | number | JSONOpComponent | JSONOpList)[] | null;
    getKey(): Key;
    getComponent(): JSONOpComponent | null;
    descendFirst(): boolean;
    nextSibling(): boolean;
    private _init;
    clone(): ReadCursor;
    [Symbol.iterator](): Generator<Key, void, unknown>;
    traverse<W extends null | WriteCursor>(w: W, fn: (c: JSONOpComponent, w: W) => void): void;
    eachPick<W extends null | WriteCursor>(w: W, fn: (slot: number, w: W) => void): void;
    eachDrop<W extends null | WriteCursor>(w: W, fn: (slot: number, w: W) => void): void;
}
export declare class WriteCursor extends Cursor {
    pendingDescent: Path;
    private _op;
    constructor(op?: JSONOp);
    private flushDescent;
    reset(): void;
    getComponent(): JSONOpComponent;
    write<K extends keyof JSONOpComponent>(key: K, value: JSONOpComponent[K]): void;
    get(): JSONOp;
    descend(key: Key): void;
    descendPath(path: Path): this;
    ascend(): void;
    mergeTree(data: JSONOp, mergeFn?: typeof copyAll): void;
    at(path: Path, fn: (w: WriteCursor) => void): this;
    writeAtPath<K extends keyof JSONOpComponent>(path: Path, key: K, value: JSONOpComponent[K]): this;
    writeMove(path1: Path, path2: Path, slot?: number): this;
    getPath(): Path;
}
export declare const writeCursor: () => WriteCursor;
export declare const readCursor: (op: JSONOp) => ReadCursor;
export declare function advancer(r: ReadCursor | null, listMap?: (k: number, c: JSONOpComponent | null) => number, listAdv?: (k: number, c: JSONOpComponent | null) => void): {
    (ktarget: Key): ReadCursor | null;
    end(): void;
};
export declare function eachChildOf(r1: ReadCursor | null, r2: ReadCursor | null, fn: (k: Key, r1: ReadCursor | null, r2: ReadCursor | null) => void): void;
export {};
