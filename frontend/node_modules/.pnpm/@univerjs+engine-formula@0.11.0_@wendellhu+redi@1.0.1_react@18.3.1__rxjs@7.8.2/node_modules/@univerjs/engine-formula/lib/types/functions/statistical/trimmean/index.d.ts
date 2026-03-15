import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Trimmean extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, percent: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _getValues;
}
