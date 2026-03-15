import { IDisposable } from '@univerjs/core';
import { Lang } from './lang';
export declare class Hyphen implements IDisposable {
    private _patterns;
    private _hyphenCache;
    private static _instance;
    static getInstance(): Hyphen;
    constructor();
    private _preloadPatterns;
    private _loadExceptionsToCache;
    loadPattern(lang: Lang): Promise<void>;
    fetchHyphenCache(lang: Lang): Map<string, string[]> | undefined;
    hasPattern(lang: Lang): boolean;
    hyphenate(word: string, lang: Lang): string[] | undefined;
    dispose(): void;
}
