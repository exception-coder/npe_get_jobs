import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Combin extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, numberChosen: BaseValueObject): BaseValueObject;
}
