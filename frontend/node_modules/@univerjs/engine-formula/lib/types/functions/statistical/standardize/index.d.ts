import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Standardize extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject, mean: BaseValueObject, standardDev: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
