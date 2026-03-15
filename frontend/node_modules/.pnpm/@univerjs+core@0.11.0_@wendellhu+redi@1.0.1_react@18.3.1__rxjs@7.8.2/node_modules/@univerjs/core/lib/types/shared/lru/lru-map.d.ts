import { IDisposable } from '../../common/di';
declare const NEWER: unique symbol;
declare const OLDER: unique symbol;
export declare class KeyIterator<K, V> implements IterableIterator<K> {
    entry: Entry<K, V> | undefined;
    constructor(oldestEntry: Entry<K, V> | undefined);
    [Symbol.iterator](): IterableIterator<K>;
    next(): IteratorResult<K, K | undefined>;
}
export declare class ValueIterator<K, V> implements IterableIterator<V> {
    entry: Entry<K, V> | undefined;
    constructor(oldestEntry: Entry<K, V> | undefined);
    [Symbol.iterator](): IterableIterator<V>;
    next(): IteratorResult<V, V | undefined>;
}
export declare class EntryIterator<K, V> implements IterableIterator<[K, V]> {
    entry: Entry<K, V> | undefined;
    constructor(oldestEntry: Entry<K, V> | undefined);
    [Symbol.iterator](): IterableIterator<[K, V]>;
    next(): IteratorResult<[K, V], [K, V] | undefined>;
}
export declare class Entry<K, V> {
    key: K;
    value: V;
    [NEWER]: Entry<K, V> | undefined;
    [OLDER]: Entry<K, V> | undefined;
    constructor(key: K, value: V);
    toJSON(): {
        key: K;
        value: V;
    };
}
export declare class LRUMap<K, V> {
    private _keymap;
    size: number;
    limit: number;
    oldest: Entry<K, V> | undefined;
    newest: Entry<K, V> | undefined;
    private readonly _onShiftListeners;
    onShift(callback: (entry: Entry<K, V>) => void): IDisposable;
    constructor(entries: Iterable<[K, V]>);
    constructor(limit: number);
    constructor(limit: number, entries: Iterable<[K, V]>);
    _initialize(limit: number, entries: Iterable<[K, V]> | undefined): void;
    _markEntryAsUsed(entry: Entry<K, V>): void;
    assign(entries: Iterable<[K, V]>): void;
    set(key: K, value: V): LRUMap<K, V>;
    shift(): [K, V] | undefined;
    get(key: K): V | undefined;
    has(key: K): boolean;
    find(key: K): V | undefined;
    delete(key: K): V | undefined;
    clear(): void;
    keys(): Iterator<K, K | undefined>;
    values(): Iterator<V, V | undefined>;
    entries(): Iterator<[K, V], [K, V] | undefined>;
    [Symbol.iterator](): Iterator<[K, V], [K, V] | undefined>;
    forEach(fun: (value: V, key: K, m: LRUMap<K, V>) => void, thisObj?: any): void;
    toJSON(): Array<{
        key: K;
        value: V;
    }>;
    toString(): string;
}
export declare class LRUHelper {
    static hasLength(array: unknown[], size: number): boolean;
    static getValueType(value: any): string;
    static isObject<T = object>(value?: any): value is T;
    static isIterable<T>(value?: any): value is Iterable<T>;
    static isNumber(value?: any): value is number;
}
export {};
