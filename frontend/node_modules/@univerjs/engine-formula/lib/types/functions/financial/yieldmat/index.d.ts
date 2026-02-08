import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Yieldmat extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(settlement: BaseValueObject, maturity: BaseValueObject, issue: BaseValueObject, rate: BaseValueObject, pr: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
    private _getDateCorrectOrder;
}
