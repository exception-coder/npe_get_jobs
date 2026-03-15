import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Dollarde extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(fractionalDollar: BaseValueObject, fraction: BaseValueObject): BaseValueObject;
}
