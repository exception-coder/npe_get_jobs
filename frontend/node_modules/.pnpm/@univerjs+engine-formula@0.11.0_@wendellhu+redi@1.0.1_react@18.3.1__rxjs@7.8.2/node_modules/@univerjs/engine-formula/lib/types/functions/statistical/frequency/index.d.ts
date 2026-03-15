import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Frequency extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(dataArray: BaseValueObject, binsArray: BaseValueObject): BaseValueObject;
    private _getValues;
    private _getNewBinsArrayValues;
}
