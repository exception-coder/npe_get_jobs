import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Sqrt extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject): BaseValueObject;
}
