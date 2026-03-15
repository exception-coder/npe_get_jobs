import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Tocol extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, ignore?: BaseValueObject, scanByColumn?: BaseValueObject): BaseValueObject;
    private _getArrayValueByColumn;
    private _getArrayValueByRow;
    private _isIgnore;
}
