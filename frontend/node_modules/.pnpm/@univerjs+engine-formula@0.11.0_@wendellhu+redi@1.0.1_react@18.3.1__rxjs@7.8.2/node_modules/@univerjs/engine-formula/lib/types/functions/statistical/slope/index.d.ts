import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Slope extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(knownYs: BaseValueObject, knownXs: BaseValueObject): BaseValueObject;
    private _getResult;
}
