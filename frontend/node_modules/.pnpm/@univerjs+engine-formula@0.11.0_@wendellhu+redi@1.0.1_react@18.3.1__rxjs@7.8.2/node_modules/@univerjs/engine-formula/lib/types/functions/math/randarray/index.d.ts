import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { BaseFunction } from '../../base-function';
export declare class Randarray extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsSheetRowColumnCount: boolean;
    calculate(rows?: BaseValueObject, columns?: BaseValueObject, min?: BaseValueObject, max?: BaseValueObject, wholeNumber?: BaseValueObject): BaseValueObject | ArrayValueObject;
    private _calculateResult;
    private _calculateSingleCell;
    private _handleError;
    private _getValue;
}
