import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Oddfprice extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(settlement: BaseValueObject, maturity: BaseValueObject, issue: BaseValueObject, firstCoupon: BaseValueObject, rate: BaseValueObject, yld: BaseValueObject, redemption: BaseValueObject, frequency: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
    private _validDate;
    private _getDateCorrectOrder;
}
