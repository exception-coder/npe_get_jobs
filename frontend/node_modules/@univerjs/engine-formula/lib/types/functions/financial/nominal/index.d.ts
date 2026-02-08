import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Nominal extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(effectRate: BaseValueObject, npery: BaseValueObject): BaseValueObject;
}
