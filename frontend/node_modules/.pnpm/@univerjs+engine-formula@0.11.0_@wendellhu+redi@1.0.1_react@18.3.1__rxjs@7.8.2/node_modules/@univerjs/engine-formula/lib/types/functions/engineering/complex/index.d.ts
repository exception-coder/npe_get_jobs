import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Complex extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(realNum: BaseValueObject, iNum: BaseValueObject, suffix?: BaseValueObject): BaseValueObject;
}
