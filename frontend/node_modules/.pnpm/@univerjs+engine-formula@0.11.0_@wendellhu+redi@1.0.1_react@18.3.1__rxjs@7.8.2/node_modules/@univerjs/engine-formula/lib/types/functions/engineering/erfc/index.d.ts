import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Erfc extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject): BaseValueObject;
}
