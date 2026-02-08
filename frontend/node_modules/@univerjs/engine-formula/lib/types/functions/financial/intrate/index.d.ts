import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Intrate extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(settlement: BaseValueObject, maturity: BaseValueObject, investment: BaseValueObject, redemption: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
}
