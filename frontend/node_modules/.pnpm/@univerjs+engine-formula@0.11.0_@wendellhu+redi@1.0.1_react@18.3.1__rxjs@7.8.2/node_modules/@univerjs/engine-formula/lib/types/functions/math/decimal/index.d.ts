import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Decimal extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(text: BaseValueObject, radix: BaseValueObject): BaseValueObject;
    private _isValidCharForRadix;
}
