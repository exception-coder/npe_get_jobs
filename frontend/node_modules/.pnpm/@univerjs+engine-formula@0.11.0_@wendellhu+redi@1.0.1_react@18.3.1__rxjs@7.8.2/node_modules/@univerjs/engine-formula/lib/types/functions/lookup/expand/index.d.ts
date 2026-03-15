import { BaseFunction } from '../../base-function';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
export declare class Expand extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, rows: BaseValueObject, columns?: BaseValueObject, padWith?: BaseValueObject): BaseValueObject;
    private _checkRowsColumnsPadWith;
    private _getResultArray;
}
