import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Arraytotext extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, format?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _checkArray;
}
