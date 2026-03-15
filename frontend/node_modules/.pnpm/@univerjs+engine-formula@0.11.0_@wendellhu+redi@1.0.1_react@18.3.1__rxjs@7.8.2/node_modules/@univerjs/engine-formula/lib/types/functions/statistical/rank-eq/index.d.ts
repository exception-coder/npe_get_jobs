import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class RankEq extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    calculate(number: FunctionVariantType, ref: FunctionVariantType, order?: FunctionVariantType): BaseValueObject;
    private _checkRefReferenceObject;
}
