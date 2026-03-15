import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Sumproduct extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array1: BaseValueObject, ...variants: BaseValueObject[]): BaseValueObject;
    private _initArray1;
    private _getResultArrayByArray1;
}
