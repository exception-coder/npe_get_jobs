import { BaseFunction } from '../../base-function';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
export declare class Mod extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, divisor: BaseValueObject): BaseValueObject;
}
