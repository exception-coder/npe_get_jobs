import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Pricedisc extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(settlement: BaseValueObject, maturity: BaseValueObject, discount: BaseValueObject, redemption: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
}
