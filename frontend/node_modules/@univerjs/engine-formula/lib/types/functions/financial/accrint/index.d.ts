import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Accrint extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(issue: BaseValueObject, firstInterest: BaseValueObject, settlement: BaseValueObject, rate: BaseValueObject, par: BaseValueObject, frequency: BaseValueObject, basis?: BaseValueObject, calcMethod?: BaseValueObject): BaseValueObject;
    private _getResult;
}
