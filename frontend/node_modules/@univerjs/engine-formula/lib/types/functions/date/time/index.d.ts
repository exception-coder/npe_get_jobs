import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Time extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(hour: BaseValueObject, minute: BaseValueObject, second: BaseValueObject): BaseValueObject;
    private _calculateTime;
}
