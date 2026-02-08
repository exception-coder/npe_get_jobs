import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Sort extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, sortIndex?: BaseValueObject, sortOrder?: BaseValueObject, byCol?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _checkArrayError;
    private _getResult;
    private _sort;
    private _sortAsc;
    private _sortDesc;
}
