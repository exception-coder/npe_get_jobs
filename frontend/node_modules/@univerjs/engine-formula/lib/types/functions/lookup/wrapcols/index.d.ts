import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Wrapcols extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(vector: BaseValueObject, wrapCount: BaseValueObject, padWith?: BaseValueObject): BaseValueObject;
    private _getWrapArray;
}
