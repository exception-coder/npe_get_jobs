import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Xnpv extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(rate: BaseValueObject, values: BaseValueObject, dates: BaseValueObject): BaseValueObject;
    private _checkErrors;
    private _checkErrorValues;
    private _checkErrorDates;
}
