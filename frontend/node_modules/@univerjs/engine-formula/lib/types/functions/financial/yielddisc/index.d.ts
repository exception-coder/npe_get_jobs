import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Yielddisc extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(settlement: BaseValueObject, maturity: BaseValueObject, pr: BaseValueObject, redemption: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
}
