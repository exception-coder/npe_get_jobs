import { BaseFunction } from '../../base-function';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
export declare class Seriessum extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject, n: BaseValueObject, m: BaseValueObject, coefficients: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
