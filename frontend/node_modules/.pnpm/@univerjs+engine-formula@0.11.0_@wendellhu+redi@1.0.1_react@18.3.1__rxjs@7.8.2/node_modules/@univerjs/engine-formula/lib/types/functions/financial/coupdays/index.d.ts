import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Coupdays extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(settlement: BaseValueObject, maturity: BaseValueObject, frequency: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
}
