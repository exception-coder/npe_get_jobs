import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Textjoin extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(delimiter: BaseValueObject, ignoreEmpty: BaseValueObject, ...variants: BaseValueObject[]): BaseValueObject;
    private _handleSingleObject;
    private _getDelimiterValues;
    private _getTextValues;
}
