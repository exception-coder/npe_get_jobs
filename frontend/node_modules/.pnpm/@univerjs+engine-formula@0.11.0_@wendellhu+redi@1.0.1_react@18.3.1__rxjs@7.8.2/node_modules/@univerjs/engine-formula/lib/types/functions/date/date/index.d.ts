import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class DateFunction extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(year: BaseValueObject, month: BaseValueObject, day: BaseValueObject): BaseValueObject;
}
