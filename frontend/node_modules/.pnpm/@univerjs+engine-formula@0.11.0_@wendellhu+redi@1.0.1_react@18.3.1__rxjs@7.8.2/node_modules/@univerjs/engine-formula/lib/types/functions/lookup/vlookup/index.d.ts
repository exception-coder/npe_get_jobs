import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Vlookup extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(lookupValue: BaseValueObject, tableArray: BaseValueObject, colIndexNum: BaseValueObject, rangeLookup?: BaseValueObject): BaseValueObject | ArrayValueObject;
    private _handleArrayColIndexNum;
    private _handleNonArrayColIndexNum;
    private _handleTableArray;
    private _handleSingleObject;
}
