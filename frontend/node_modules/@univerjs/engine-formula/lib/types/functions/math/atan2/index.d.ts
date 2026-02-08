import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Atan2 extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(xNum: BaseValueObject, yNum: BaseValueObject): BaseValueObject;
}
