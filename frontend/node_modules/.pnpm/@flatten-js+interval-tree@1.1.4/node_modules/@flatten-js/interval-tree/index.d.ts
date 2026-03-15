// Type definitions for flatten-interval-tree library
// Project: https://github.com/alexbol99/flatten-js
// Definitions by: Alex Bol

/// <reference lib="es2015" />

type Comparable = any;      // any object that implements operators '<' and '==' and method 'max'

// Define Value<T> with the required.less_than method if T is not a primitive
type PrimitiveComparable = number | string | bigint;
type LessThanFn<T> = (this: T, other: T) => boolean;
export type Value<T> = T extends PrimitiveComparable ? T : T & { less_than: LessThanFn<T> };

export type NumericTuple = [number,number];
type MappedItem = any;
type OutputMapperFn<T> = (value: Value<T>, key: Interval) => MappedItem
export type SearchOutput<T> = Array<Value<T>> | Array<Interval> | Array<MappedItem>
export type IterableOutput<T> = Iterable<Value<T>> | Iterable<Interval> | Iterable<MappedItem>

interface IntervalInterface {
    low: Comparable;
    high: Comparable;

    readonly  max: Comparable;

    clone(): Interval;
    less_than(other_interval: Interval) : boolean;
    equal_to(other_interval: Interval) : boolean;
    intersect(other_interval: Interval) : boolean;
    not_intersect(other_interval: Interval) : boolean;
    output() : any;
}

export declare class Interval implements IntervalInterface {
    low: Comparable;
    high: Comparable;

    constructor(low: Comparable, high: Comparable);

    readonly  max: Interval;

    clone(): Interval;
    less_than(other_interval: Interval) : boolean;
    equal_to(other_interval: Interval) : boolean;
    intersect(other_interval: Interval) : boolean;
    not_intersect(other_interval: Interval) : boolean;
    merge(other_interval: Interval) : Interval;
    output() : NumericTuple;

    static comparable_max(arg1: Interval, arg2: Interval) : Interval;
    static comparable_less_than(arg1: Comparable, arg2: Comparable ) : boolean;
}

type Item<T> = {key: Interval, value: Value<T>}

export declare class Node<T> {
    constructor(key?: Interval | NumericTuple, value?: Value<T> )

    left: Node<T>;
    right: Node<T>;
    parent: Node<T>;
    color: 1 | 0;
    item: Item<T>;

    isNil() : boolean;
    less_than(other_node: Node<T>) : boolean;
    equal_to(other_node: Node<T>) : boolean;
    intersect(other_node: Node<T>) : boolean;
    copy_data(other_node: Node<T>) : void;
    update_max() : void;
}

declare class IntervalTree<T = any> {
    constructor()

    root: Node<T> | null;

    readonly size: number;
    readonly keys: Node<T>[];
    readonly values: Value<T>[];
    readonly items: Array<{key:Interval, value: Value<T>}>;

    isEmpty(): boolean;
    clear(): void;
    insert(key: Interval | NumericTuple, value?: Value<T>) : Node<T>;
    exist(key: Interval | NumericTuple, value?: Value<T>): boolean;
    remove(key: Interval | NumericTuple, value?: Value<T>) : Node<T>;
    search(interval: Interval | NumericTuple, outputMapperFn?: OutputMapperFn<T>) : SearchOutput<T>;
    iterate(interval?: Interval | NumericTuple, outputMapperFn?: OutputMapperFn<T>) : IterableOutput<T>
    intersect_any(interval: Interval | NumericTuple) : boolean;
    forEach(callbackfn: (key: Interval, value: Value<T>) => void, thisArg?: any ) : void;
    map(callbackFn: (value: Value<T>, key?: Interval) => any, thisArg?: any ): IntervalTree<T>;
}

export default IntervalTree;

