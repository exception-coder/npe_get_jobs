import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Pduration extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(rate: BaseValueObject, pv: BaseValueObject, fv: BaseValueObject): BaseValueObject;
}
