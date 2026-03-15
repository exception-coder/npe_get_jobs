import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Duration extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(settlement: BaseValueObject, maturity: BaseValueObject, coupon: BaseValueObject, yld: BaseValueObject, frequency: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
}
