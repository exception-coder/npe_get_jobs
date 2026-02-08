import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class ConfidenceNorm extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(alpha: BaseValueObject, standardDev: BaseValueObject, size: BaseValueObject): BaseValueObject;
}
