import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Yield extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(settlement: BaseValueObject, maturity: BaseValueObject, rate: BaseValueObject, pr: BaseValueObject, redemption: BaseValueObject, frequency: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
    private _getResult;
}
