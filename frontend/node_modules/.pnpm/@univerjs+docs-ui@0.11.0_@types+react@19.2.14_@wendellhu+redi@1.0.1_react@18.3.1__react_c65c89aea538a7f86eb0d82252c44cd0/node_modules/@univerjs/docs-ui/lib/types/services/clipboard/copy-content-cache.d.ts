import { IDocumentData } from '@univerjs/core';
export declare function genId(): string;
export declare function extractId(html: string): string | null;
export declare class CopyContentCache {
    private _cache;
    set(id: string, clipboardData: Partial<IDocumentData>): void;
    get(id: string): Partial<IDocumentData> | undefined;
    clear(): void;
}
export declare const copyContentCache: CopyContentCache;
