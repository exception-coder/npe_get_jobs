import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Left extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(text: BaseValueObject, numChars?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
