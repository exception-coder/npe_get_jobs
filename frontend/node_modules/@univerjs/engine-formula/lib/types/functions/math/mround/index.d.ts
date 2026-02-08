import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Mround extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, multiple: BaseValueObject): BaseValueObject;
}
