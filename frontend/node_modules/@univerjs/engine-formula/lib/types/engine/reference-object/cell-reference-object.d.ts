import { IRange } from '@univerjs/core';
import { ErrorValueObject } from '../value-object/base-value-object';
import { BaseReferenceObject } from './base-reference-object';
import { RangeReferenceObject } from './range-reference-object';
export declare class CellReferenceObject extends BaseReferenceObject {
    constructor(token: string);
    isCell(): boolean;
    unionBy(referenceObject: BaseReferenceObject): ErrorValueObject | RangeReferenceObject;
    unionRange(rangeData1: IRange, rangeData2: IRange): IRange;
    private _createRange;
}
