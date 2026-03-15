import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { StringValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class Textafter extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(text: BaseValueObject, delimiter: BaseValueObject, instanceNum?: BaseValueObject, matchMode?: BaseValueObject, matchEnd?: BaseValueObject, ifNotFound?: BaseValueObject): StringValueObject | ArrayValueObject;
    private _getResultArray;
    private _checkVariantsError;
    private _getStringValue;
    private _getDelimiterValue;
    private _getVariantsNumberFloorValue;
    private _getResult;
}
