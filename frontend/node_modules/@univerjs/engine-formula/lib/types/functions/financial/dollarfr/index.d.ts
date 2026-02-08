import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Dollarfr extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(decimalDollar: BaseValueObject, fraction: BaseValueObject): BaseValueObject;
}
