import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { BaseFunction } from '../../base-function';
export declare class Subtotal extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    needsFilteredOutRows: boolean;
    needsFormulaDataModel: boolean;
    calculate(functionNum: FunctionVariantType, ...refs: FunctionVariantType[]): FunctionVariantType;
    private _handleSingleObject;
    private _getIndexNumValue;
    private _average;
    private _count;
    private _counta;
    private _max;
    private _min;
    private _product;
    private _stdev;
    private _stdevp;
    private _sum;
    private _var;
    private _varp;
    private _flattenRefArray;
    private _isRowHidden;
    private _isBlankArrayObject;
}
