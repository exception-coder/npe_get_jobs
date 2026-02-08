import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Forecast extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject, knownYs: BaseValueObject, knownXs: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
