import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Countif extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    calculate(range: FunctionVariantType, criteria: FunctionVariantType): BaseValueObject;
    private _handleSingleObject;
    private _countA;
}
