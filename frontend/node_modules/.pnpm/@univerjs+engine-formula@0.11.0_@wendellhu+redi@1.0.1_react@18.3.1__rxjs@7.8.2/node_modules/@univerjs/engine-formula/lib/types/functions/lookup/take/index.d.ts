import { BaseFunction } from '../../base-function';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
export declare class Take extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, rows: BaseValueObject, columns?: BaseValueObject): BaseValueObject;
    private _checkRowsColumns;
    private _getResultArray;
}
