import { IRange, Nullable } from '@univerjs/core';
import { BaseReferenceObject } from './base-reference-object';
export declare class RangeReferenceObject extends BaseReferenceObject {
    constructor(range: IRange, forcedSheetId?: Nullable<string>, forcedUnitId?: string);
    isRange(): boolean;
}
