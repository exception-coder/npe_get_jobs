import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Rri extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(nper: BaseValueObject, pv: BaseValueObject, fv: BaseValueObject): BaseValueObject;
}
