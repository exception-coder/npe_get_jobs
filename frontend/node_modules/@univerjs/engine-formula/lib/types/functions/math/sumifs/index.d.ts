import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { BaseFunction } from '../../base-function';
export declare class Sumifs extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    calculate(sumRange: FunctionVariantType, ...variants: FunctionVariantType[]): BaseValueObject | ArrayValueObject;
    private _aggregateResults;
}
