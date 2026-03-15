import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Isna extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(value: BaseValueObject): BaseValueObject;
}
