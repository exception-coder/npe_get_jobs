import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class RankAvg extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    calculate(number: FunctionVariantType, ref: FunctionVariantType, order?: FunctionVariantType): BaseValueObject;
    private _getResult;
    private _checkRefReferenceObject;
}
