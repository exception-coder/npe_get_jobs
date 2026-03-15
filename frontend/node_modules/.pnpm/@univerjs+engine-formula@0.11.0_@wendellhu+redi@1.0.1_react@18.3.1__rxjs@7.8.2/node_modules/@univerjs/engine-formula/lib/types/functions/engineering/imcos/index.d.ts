import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Imcos extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(inumber: BaseValueObject): BaseValueObject;
}
