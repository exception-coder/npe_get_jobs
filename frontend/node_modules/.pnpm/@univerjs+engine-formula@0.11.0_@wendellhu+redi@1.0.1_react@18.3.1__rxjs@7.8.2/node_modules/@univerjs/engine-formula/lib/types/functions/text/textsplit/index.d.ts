import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { BaseFunction } from '../../base-function';
export declare class Textsplit extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(text: BaseValueObject, colDelimiter: BaseValueObject, rowDelimiter?: BaseValueObject, ignoreEmpty?: BaseValueObject, matchMode?: BaseValueObject, padWith?: BaseValueObject): BaseValueObject | ArrayValueObject;
    private _getStringValues;
    private _getResultArray;
    private _getResult;
    private _checkVariantsError;
    private _getRegExpStringValue;
    private _escapeRegExp;
}
