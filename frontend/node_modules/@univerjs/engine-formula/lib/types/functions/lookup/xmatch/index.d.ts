import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Xmatch extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(lookupValue: BaseValueObject, lookupArray: BaseValueObject, matchMode?: BaseValueObject, searchMode?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _getResult;
}
