import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class NormInv extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(probability: BaseValueObject, mean: BaseValueObject, standardDev: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
