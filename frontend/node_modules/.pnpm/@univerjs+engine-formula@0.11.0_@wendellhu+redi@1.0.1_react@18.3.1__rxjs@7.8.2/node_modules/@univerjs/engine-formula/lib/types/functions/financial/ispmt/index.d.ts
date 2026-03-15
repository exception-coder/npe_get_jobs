import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Ispmt extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(rate: BaseValueObject, per: BaseValueObject, nper: BaseValueObject, pv: BaseValueObject): BaseValueObject;
}
