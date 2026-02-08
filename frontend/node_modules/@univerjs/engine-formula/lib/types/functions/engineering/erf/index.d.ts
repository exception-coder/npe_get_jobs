import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Erf extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(lowerLimit: BaseValueObject, upperLimit?: BaseValueObject): BaseValueObject;
}
