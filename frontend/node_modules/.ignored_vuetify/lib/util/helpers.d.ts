// Types
import type { ComponentInternalInstance, ComponentPublicInstance, ComputedGetter, InjectionKey, PropType, Ref, ToRef, VNode, VNodeArrayChildren, VNodeChild } from 'vue';
export declare function getNestedValue(obj: any, path: (string | number)[], fallback?: any): any;
export declare function getObjectValueByPath(obj: any, path?: string | null, fallback?: any): any;
export type SelectItemKey<T = Record<string, any>> = boolean | null | undefined // Ignored
 | string // Lookup by key, can use dot notation for nested objects
 | readonly (string | number)[] // Nested lookup by key, each array item is a key in the next level
 | ((item: T, fallback?: any) => any);
export declare function getPropertyFromItem(item: any, property: SelectItemKey, fallback?: any): any;
export declare function createRange(length: number, start?: number): number[];
export declare function getZIndex(el?: Element | null): number;
export declare function convertToUnit(str: number, unit?: string): string;
export declare function convertToUnit(str: string | number | null | undefined, unit?: string): string | undefined;
export declare function isObject(obj: any): obj is Record<string, any>;
export declare function isPlainObject(obj: any): obj is Record<string, any>;
export declare function refElement(obj?: ComponentPublicInstance<any> | HTMLElement): HTMLElement | undefined;
// KeyboardEvent.keyCode aliases
export declare const keyCodes: Readonly<{
    enter: 13;
    tab: 9;
    delete: 46;
    esc: 27;
    space: 32;
    up: 38;
    down: 40;
    left: 37;
    right: 39;
    end: 35;
    home: 36;
    del: 46;
    backspace: 8;
    insert: 45;
    pageup: 33;
    pagedown: 34;
    shift: 16;
}>;
export declare const keyValues: Record<string, string>;
export declare function keys<O extends {}>(o: O): (keyof O)[];
export declare function has<T extends string>(obj: object, key: T[]): obj is Record<T, unknown>;
type MaybePick<T extends object, U extends Extract<keyof T, string>> = Record<string, unknown> extends T ? Partial<Pick<T, U>> : Pick<T, U>;
// Array of keys
export declare function pick<T extends object, U extends Extract<keyof T, string>>(obj: T, paths: readonly U[]): MaybePick<T, U>;
// Array of keys
export declare function pickWithRest<T extends object, U extends Extract<keyof T, string>, E extends Extract<keyof T, string>>(obj: T, paths: U[], exclude?: E[]): [yes: MaybePick<T, Exclude<U, E>>, no: Omit<T, Exclude<U, E>>];
// Array of keys or RegExp to test keys against
export declare function pickWithRest<T extends object, U extends Extract<keyof T, string>, E extends Extract<keyof T, string>>(obj: T, paths: (U | RegExp)[], exclude?: E[]): [yes: Partial<T>, no: Partial<T>];
export declare function omit<T extends object, U extends Extract<keyof T, string>>(obj: T, exclude: U[]): Omit<T, U>;
export declare const isOn: (key: string) => boolean;
export declare function isComposingIgnoreKey(e: KeyboardEvent): boolean;
/**
 * Filter attributes that should be applied to
 * the root element of an input component. Remaining
 * attributes should be passed to the <input> element inside.
 */
export declare function filterInputAttrs(attrs: Record<string, unknown>): Partial<Partial<Record<string, unknown>>>[];
/**
 * Returns the set difference of B and A, i.e. the set of elements in B but not in A
 */
export declare function arrayDiff(a: any[], b: any[]): any[];
type IfAny<T, Y, N> = 0 extends (1 & T) ? Y : N;
export declare function wrapInArray<T>(v: T | null | undefined): T extends readonly any[] ? IfAny<T, T[], T> : NonNullable<T>[];
export declare function defaultFilter(value: any, search: string | null, item: any): boolean;
export declare function debounce(fn: Function, delay: MaybeRef<number>): {
    (...args: any[]): void;
    clear: () => void;
    immediate: Function;
};
export declare function clamp(value: number, min?: number, max?: number): number;
export declare function getDecimals(value: number): number;
export declare function padEnd(str: string, length: number, char?: string): string;
export declare function padStart(str: string, length: number, char?: string): string;
export declare function chunk(str: string, size?: number): string[];
export declare function chunkArray(array: any[], size?: number): any[][];
export declare function humanReadableFileSize(bytes: number, base?: 1000 | 1024): string;
export declare function mergeDeep(source?: Record<string, any>, target?: Record<string, any>, arrayFn?: (a: unknown[], b: unknown[]) => unknown[]): Record<string, any>;
export declare function flattenFragments(nodes: VNode[]): VNode[];
export declare function toKebabCase(str?: string): string;
export type MaybeRef<T> = T | Ref<T>;
export declare function findChildrenWithProvide(key: InjectionKey<any> | symbol, vnode?: VNodeChild): ComponentInternalInstance[];
export declare class CircularBuffer<T = never> {
    #private;
    readonly size: number;
    constructor(size: number);
    get isFull(): boolean;
    push(val: T): void;
    values(): T[];
    clear(): void;
}
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
export declare function getEventCoordinates(e: MouseEvent | TouchEvent): {
    clientX: number;
    clientY: number;
};
// Only allow a single return type
type NotAUnion<T> = [T] extends [infer U] ? _NotAUnion<U, U> : never;
type _NotAUnion<T, U> = U extends any ? [T] extends [U] ? unknown : never : never;
type ToReadonlyRefs<T> = {
    [K in keyof T]: Readonly<ToRef<T[K]>>;
};
/**
 * Convert a computed ref to a record of refs.
 * The getter function must always return an object with the same keys.
 */
export declare function destructComputed<T extends object>(getter: ComputedGetter<T & NotAUnion<T>>): ToReadonlyRefs<T>;
/** Array.includes but value can be any type */
export declare function includes(arr: readonly any[], val: any): boolean;
export declare function eventName(propName: string): string;
// TODO: this should be an array but vue's types don't accept arrays: vuejs/core#8025
export type EventProp<T extends any[] = any[], F = (...args: T) => void> = F;
export declare const EventProp: <T extends any[] = any[]>() => PropType<(...args: T) => void>;
export declare function hasEvent(props: Record<string, any>, name: string): boolean;
export declare function callEvent<T extends any[]>(handler: EventProp<T> | EventProp<T>[] | undefined, ...args: T): void;
export declare function focusableChildren(el: Element, filterByTabIndex?: boolean): HTMLElement[];
export declare function getNextElement(elements: HTMLElement[], location?: 'next' | 'prev', condition?: (el: HTMLElement) => boolean): HTMLElement;
export declare function focusChild(el: Element, location?: 'next' | 'prev' | 'first' | 'last' | number): void;
export declare function isEmpty(val: any): boolean;
export declare function noop(): void;
/** Returns null if the selector is not supported or we can't check */
export declare function matchesSelector(el: Element | undefined, selector: string): boolean | null;
export declare function ensureValidVNode(vnodes: VNodeArrayChildren): VNodeArrayChildren | null;
type Slot<T> = [T] extends [never] ? () => VNodeChild : (arg: T) => VNodeChild;
export declare function renderSlot<T>(slot: Slot<never> | undefined, fallback?: Slot<never> | undefined): VNodeChild;
export declare function renderSlot<T>(slot: Slot<T> | undefined, props: T, fallback?: Slot<T> | undefined): VNodeChild;
export declare function defer(timeout: number, cb: () => void): () => void;
export declare function isClickInsideElement(event: MouseEvent, targetDiv: HTMLElement): boolean;
export type TemplateRef = {
    (target: Element | ComponentPublicInstance | null): void;
    value: HTMLElement | ComponentPublicInstance | null | undefined;
    readonly el: HTMLElement | undefined;
};
export declare function templateRef(): TemplateRef;
export declare function checkPrintable(e: KeyboardEvent): boolean;
export type Primitive = string | number | boolean | symbol | bigint;
export declare function isPrimitive(value: unknown): value is Primitive;
export declare function escapeForRegex(sign: string): string;
export declare function extractNumber(text: string, decimalDigitsLimit: number | null, decimalSeparator: string): string;
export declare function camelizeProps<T extends Record<string, unknown>>(props: T | null): T;
export declare function onlyDefinedProps(props: Record<string, any>): {
    [k: string]: any;
};
export type NonEmptyArray<T> = [T, ...T[]];
export declare function deepToRaw<T extends {}>(value: T): T;

