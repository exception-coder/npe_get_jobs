import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Rightb extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(text: BaseValueObject, numBytes?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
