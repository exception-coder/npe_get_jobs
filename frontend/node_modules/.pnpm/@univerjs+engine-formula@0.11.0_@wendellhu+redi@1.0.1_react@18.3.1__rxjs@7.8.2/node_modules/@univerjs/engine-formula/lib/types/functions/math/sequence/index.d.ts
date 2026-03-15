import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Sequence extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsSheetRowColumnCount: boolean;
    calculate(rows: BaseValueObject, columns?: BaseValueObject, start?: BaseValueObject, step?: BaseValueObject): BaseValueObject;
    private _getResult;
}
