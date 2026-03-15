import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Amorlinc extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(cost: BaseValueObject, datePurchased: BaseValueObject, firstPeriod: BaseValueObject, salvage: BaseValueObject, period: BaseValueObject, rate: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
    private _getResult;
}
