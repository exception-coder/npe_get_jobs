export type ValueComparator = (a: any, b: any) => boolean;
export declare function deepEqual(a: any, b: any, recursionCache?: WeakMap<WeakKey, any>): boolean;
