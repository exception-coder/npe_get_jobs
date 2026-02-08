import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Iserror extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(value: BaseValueObject): BaseValueObject;
}
