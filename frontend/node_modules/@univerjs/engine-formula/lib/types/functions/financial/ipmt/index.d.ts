import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Ipmt extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(rate: BaseValueObject, per: BaseValueObject, nper: BaseValueObject, pv: BaseValueObject, fv?: BaseValueObject, type?: BaseValueObject): BaseValueObject;
}
