import { Nullable, ObjectMatrix } from '@univerjs/core';
import { IDiscreteRange } from '../../controllers/utils/range-tools';
import { COPY_TYPE, ICellDataWithSpanInfo } from './type';
export interface ICopyContentCacheData {
    subUnitId: string;
    unitId: string;
    range: IDiscreteRange;
    copyType: COPY_TYPE;
    matrix: Nullable<ObjectMatrix<ICellDataWithSpanInfo>>;
}
export declare function genId(): string;
export declare function extractId(html: string): string | null;
export declare class CopyContentCache {
    private _cache;
    set(id: string, clipboardData: ICopyContentCacheData): void;
    get(id: string): ICopyContentCacheData | undefined;
    del(id: string): void;
    clear(): void;
    clearWithUnitId(unitId: string): void;
}
export declare const copyContentCache: CopyContentCache;
