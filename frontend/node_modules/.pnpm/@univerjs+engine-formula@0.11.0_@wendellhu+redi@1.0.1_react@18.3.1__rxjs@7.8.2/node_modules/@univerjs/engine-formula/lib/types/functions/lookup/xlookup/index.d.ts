import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Xlookup extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(lookupValue: BaseValueObject, lookupArray: BaseValueObject, returnArray: BaseValueObject, ifNotFound?: BaseValueObject, matchMode?: BaseValueObject, searchMode?: BaseValueObject): BaseValueObject;
    private _getResult;
    private _handleExpandObject;
    private _handleSingleObject;
    /**
     * Wildcard matching and binary search cannot appear at the same time
     * @param matchModeValue
     * @param searchModeValue
     * @returns
     */
    private _checkErrorCombination;
}
