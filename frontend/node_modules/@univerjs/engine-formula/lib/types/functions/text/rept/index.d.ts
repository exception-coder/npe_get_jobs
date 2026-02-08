import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Rept extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(text: BaseValueObject, numberTimes: BaseValueObject): BaseValueObject;
}
