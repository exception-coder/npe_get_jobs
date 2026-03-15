import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Epochtodate extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    calculate(timestamp: FunctionVariantType, unit?: FunctionVariantType): BaseValueObject;
    private _checkVariants;
}
