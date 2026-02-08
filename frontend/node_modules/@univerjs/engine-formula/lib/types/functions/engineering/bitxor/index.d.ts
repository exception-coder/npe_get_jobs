import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Bitxor extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number1: BaseValueObject, number2: BaseValueObject): BaseValueObject;
}
