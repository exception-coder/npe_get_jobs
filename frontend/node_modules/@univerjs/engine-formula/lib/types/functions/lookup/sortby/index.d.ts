import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { BaseValueObject, ErrorValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Sortby extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, ...variants: BaseValueObject[]): ErrorValueObject | ArrayValueObject;
    private _getVariantsError;
    private _getResultArray;
    private _getByArraysAndSortOrders;
    private _transposeArray;
    private _sort;
    private _compare;
    private _asc;
    private _desc;
}
