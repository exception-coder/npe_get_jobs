import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Rate extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(nper: BaseValueObject, pmt: BaseValueObject, pv: BaseValueObject, fv?: BaseValueObject, type?: BaseValueObject, guess?: BaseValueObject): BaseValueObject;
    private _getResult;
}
