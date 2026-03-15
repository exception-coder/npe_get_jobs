import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class TTest extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array1: BaseValueObject, array2: BaseValueObject, tails: BaseValueObject, type: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _getArrayValues;
    private _handleArray1AndArray2;
    private _getTDistParamByArrayValues;
    private _getTDistParamByType1;
    private _getTDistParamByType2;
    private _getTDistParamByType3;
}
