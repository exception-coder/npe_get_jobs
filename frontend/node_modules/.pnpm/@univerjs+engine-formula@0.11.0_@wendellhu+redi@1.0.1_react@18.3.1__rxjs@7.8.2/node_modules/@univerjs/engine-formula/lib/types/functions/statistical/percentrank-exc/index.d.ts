import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class PercentrankExc extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, x: BaseValueObject, significance?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _getValues;
}
