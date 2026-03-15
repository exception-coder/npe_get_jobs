import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Tanh extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(variant: BaseValueObject): BaseValueObject;
}
