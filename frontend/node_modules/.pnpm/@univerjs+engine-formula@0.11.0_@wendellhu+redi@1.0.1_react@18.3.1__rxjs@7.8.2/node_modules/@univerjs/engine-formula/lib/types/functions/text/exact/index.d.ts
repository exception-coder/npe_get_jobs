import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Exact extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(text1: BaseValueObject, text2: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
