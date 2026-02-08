import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Besselj extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject, n: BaseValueObject): BaseValueObject;
}
