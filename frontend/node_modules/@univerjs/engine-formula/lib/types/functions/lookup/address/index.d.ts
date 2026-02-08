import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Address extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(rowNumber: BaseValueObject, columnNumber: BaseValueObject, absNumber?: BaseValueObject, a1?: BaseValueObject, sheetText?: BaseValueObject): BaseValueObject;
    private _calculateSingleCell;
}
