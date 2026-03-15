import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Roman extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, form?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _binarySearch;
}
