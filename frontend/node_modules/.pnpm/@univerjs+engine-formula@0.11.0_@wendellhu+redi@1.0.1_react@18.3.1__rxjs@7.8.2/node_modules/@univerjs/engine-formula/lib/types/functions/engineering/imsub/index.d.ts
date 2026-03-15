import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Imsub extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(inumber1: BaseValueObject, inumber2: BaseValueObject): BaseValueObject;
}
