import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Match extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(lookupValue: BaseValueObject, lookupArray: ArrayValueObject, matchType?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _getSearchModeValue;
}
