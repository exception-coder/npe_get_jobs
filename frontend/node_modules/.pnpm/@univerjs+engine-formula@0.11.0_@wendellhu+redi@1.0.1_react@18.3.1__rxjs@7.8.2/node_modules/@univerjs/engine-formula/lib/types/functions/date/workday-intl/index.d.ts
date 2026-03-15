import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class WorkdayIntl extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(startDate: BaseValueObject, days: BaseValueObject, weekend?: BaseValueObject, holidays?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _checkArrayError;
    private _getResultByHolidays;
}
