import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Fixed extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, decimals?: BaseValueObject, noCommas?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
