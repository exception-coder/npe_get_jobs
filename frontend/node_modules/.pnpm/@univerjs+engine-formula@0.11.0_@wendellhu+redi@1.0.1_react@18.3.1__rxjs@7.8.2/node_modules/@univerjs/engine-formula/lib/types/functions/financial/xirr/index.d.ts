import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Xirr extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(values: BaseValueObject, dates: BaseValueObject, guess?: BaseValueObject): BaseValueObject;
    private _checkErrors;
    private _checkErrorValues;
    private _checkErrorDates;
    private _checkValues;
    private _iterF;
}
