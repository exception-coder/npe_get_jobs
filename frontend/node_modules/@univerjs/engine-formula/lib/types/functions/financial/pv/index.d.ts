import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Pv extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(rate: BaseValueObject, nper: BaseValueObject, pmt: BaseValueObject, fv?: BaseValueObject, type?: BaseValueObject): BaseValueObject;
}
