import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Replaceb extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(oldText: BaseValueObject, startNum: BaseValueObject, numBytes: BaseValueObject, newText: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
