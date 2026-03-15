import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class NetworkdaysIntl extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(startDate: BaseValueObject, endDate: BaseValueObject, weekend?: BaseValueObject, holidays?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _getResultByHolidays;
}
