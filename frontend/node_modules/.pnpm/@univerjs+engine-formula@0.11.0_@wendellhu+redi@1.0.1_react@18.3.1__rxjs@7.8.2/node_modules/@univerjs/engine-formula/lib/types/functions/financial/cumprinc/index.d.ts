import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Cumprinc extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(rate: BaseValueObject, nper: BaseValueObject, pv: BaseValueObject, startPeriod: BaseValueObject, endPeriod: BaseValueObject, type: BaseValueObject): BaseValueObject;
    private _getResult;
}
