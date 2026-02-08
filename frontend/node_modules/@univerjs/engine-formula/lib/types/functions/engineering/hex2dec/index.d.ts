import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Hex2dec extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject): BaseValueObject;
}
