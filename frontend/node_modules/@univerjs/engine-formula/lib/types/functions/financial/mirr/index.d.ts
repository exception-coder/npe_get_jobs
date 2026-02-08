import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Mirr extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(values: BaseValueObject, financeRate: BaseValueObject, reinvestRate: BaseValueObject): BaseValueObject;
    private _getValues;
    private _checkValues;
    private _getResult;
    private _npv;
}
