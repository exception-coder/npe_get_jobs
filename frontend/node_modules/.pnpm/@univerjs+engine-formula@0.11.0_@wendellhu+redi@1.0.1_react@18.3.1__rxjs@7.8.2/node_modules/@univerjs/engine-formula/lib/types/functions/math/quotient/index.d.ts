import { BaseFunction } from '../../base-function';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
export declare class Quotient extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(numerator: BaseValueObject, denominator: BaseValueObject): BaseValueObject;
}
