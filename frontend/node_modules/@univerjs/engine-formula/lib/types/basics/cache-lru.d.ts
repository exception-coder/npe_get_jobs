import { LRUMap } from '@univerjs/core';
export declare class FormulaAstLRU<T> {
    private _cache;
    constructor(cacheCount: number);
    set(formulaString: string, node: T): void;
    get(formulaString: string): T | undefined;
    clear(): void;
    delete(formulaString: string): void;
    forEach(callbackfn: (value: T, key: string, map: LRUMap<string, T>) => void, thisArg?: any): void;
    private _hash;
}
