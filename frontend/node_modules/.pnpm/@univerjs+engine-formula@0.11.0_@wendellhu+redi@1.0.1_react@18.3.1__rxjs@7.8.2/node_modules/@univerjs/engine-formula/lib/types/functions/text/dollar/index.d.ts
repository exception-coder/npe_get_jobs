import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Dollar extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(number: BaseValueObject, decimals?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
