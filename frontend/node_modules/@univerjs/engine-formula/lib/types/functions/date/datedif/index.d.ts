import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Datedif extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(startDate: BaseValueObject, endDate: BaseValueObject, unit: BaseValueObject): BaseValueObject;
    private _getResultByUnit;
}
