import { IDisposable } from '@univerjs/core';
import { Lang } from './lang';
export declare class LanguageDetector implements IDisposable {
    private _detectCache;
    private static _instance;
    static getInstance(): LanguageDetector;
    detect(text: string): Lang;
    dispose(): void;
}
