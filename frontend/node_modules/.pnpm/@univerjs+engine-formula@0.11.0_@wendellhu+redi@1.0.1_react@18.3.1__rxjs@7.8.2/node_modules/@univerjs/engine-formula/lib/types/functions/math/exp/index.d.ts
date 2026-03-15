import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Exp extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(variant: BaseValueObject): BaseValueObject;
}
