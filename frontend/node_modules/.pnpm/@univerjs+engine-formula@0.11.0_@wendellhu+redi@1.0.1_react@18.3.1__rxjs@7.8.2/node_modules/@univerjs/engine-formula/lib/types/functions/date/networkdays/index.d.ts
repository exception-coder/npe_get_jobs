import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Networkdays extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(startDate: BaseValueObject, endDate: BaseValueObject, holidays?: BaseValueObject): BaseValueObject;
    private _getResultByHolidays;
}
