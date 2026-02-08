import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Divided extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(variant1: BaseValueObject, variant2: BaseValueObject): BaseValueObject;
}
