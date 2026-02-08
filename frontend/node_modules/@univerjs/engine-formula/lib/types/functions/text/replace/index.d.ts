import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Replace extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(oldText: BaseValueObject, startNum: BaseValueObject, numChars: BaseValueObject, newText: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
