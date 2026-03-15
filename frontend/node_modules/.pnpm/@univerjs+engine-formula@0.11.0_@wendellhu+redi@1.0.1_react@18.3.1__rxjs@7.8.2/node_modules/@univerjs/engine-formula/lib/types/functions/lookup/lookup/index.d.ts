import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Lookup extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsExpandParams: boolean;
    calculate(lookupValue: BaseValueObject, lookupVectorOrArray: ArrayValueObject, resultVector?: BaseValueObject): BaseValueObject;
    private _handleVector;
    private _handleArray;
}
