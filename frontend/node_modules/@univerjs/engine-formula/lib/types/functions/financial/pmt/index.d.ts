import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Pmt extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(rate: BaseValueObject, nper: BaseValueObject, pv: BaseValueObject, fv?: BaseValueObject, type?: BaseValueObject): BaseValueObject;
}
