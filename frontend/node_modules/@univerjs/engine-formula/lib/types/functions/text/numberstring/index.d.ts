import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Numberstring extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, type: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
