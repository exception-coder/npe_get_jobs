import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Fvschedule extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(principal: BaseValueObject, schedule: BaseValueObject): BaseValueObject;
}
