import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Mmult extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array1: BaseValueObject, array2: BaseValueObject): BaseValueObject;
    private _getMatrix;
}
