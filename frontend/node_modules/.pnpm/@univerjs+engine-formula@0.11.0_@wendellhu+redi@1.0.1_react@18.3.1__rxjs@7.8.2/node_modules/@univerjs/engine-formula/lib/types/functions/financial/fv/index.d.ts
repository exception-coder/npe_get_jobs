import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Fv extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(rate: BaseValueObject, nper: BaseValueObject, pmt: BaseValueObject, pv?: BaseValueObject, type?: BaseValueObject): BaseValueObject;
}
