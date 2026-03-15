import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Randbetween extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(bottom: BaseValueObject, top: BaseValueObject): BaseValueObject;
}
