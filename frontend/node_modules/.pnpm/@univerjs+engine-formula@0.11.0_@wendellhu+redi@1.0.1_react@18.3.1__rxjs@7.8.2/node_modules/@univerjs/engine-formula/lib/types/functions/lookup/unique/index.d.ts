import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Unique extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, byCol?: BaseValueObject, exactlyOnce?: BaseValueObject): BaseValueObject;
    private _getResult;
    private _getRepeatRows;
    private _getRepeatRowsByObjects;
    private _transposeArray;
}
