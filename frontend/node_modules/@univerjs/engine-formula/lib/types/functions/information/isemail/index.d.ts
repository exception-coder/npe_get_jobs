import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Isemail extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(value: BaseValueObject): BaseValueObject;
}
