import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Nper extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(rate: BaseValueObject, pmt: BaseValueObject, pv: BaseValueObject, fv?: BaseValueObject, type?: BaseValueObject): BaseValueObject;
}
