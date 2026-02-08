import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Yearfrac extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(startDate: BaseValueObject, endDate: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
}
