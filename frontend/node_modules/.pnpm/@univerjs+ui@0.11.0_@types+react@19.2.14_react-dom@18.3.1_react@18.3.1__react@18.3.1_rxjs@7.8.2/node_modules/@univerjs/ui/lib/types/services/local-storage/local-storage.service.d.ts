import { ILocalStorageService } from '@univerjs/core';
export declare class DesktopLocalStorageService implements ILocalStorageService {
    getItem<T>(key: string): Promise<T | null>;
    setItem<T>(key: string, value: T): Promise<T>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    key(index: number): Promise<string | null>;
    keys(): Promise<string[]>;
    iterate<T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U): Promise<U>;
}
