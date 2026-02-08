import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Filter extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, include: BaseValueObject, ifEmpty?: BaseValueObject): BaseValueObject;
    private _getResultArrayByR1C1;
    private _getResultArrayByR1;
    private _getResultArrayByC1;
}
