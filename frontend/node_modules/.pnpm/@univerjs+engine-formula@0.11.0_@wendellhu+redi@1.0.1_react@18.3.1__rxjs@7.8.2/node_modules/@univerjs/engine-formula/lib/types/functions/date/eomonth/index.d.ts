import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Eomonth extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(startDate: BaseValueObject, months: BaseValueObject): BaseValueObject;
}
