import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Days extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(endDate: BaseValueObject, startDate: BaseValueObject): BaseValueObject;
}
