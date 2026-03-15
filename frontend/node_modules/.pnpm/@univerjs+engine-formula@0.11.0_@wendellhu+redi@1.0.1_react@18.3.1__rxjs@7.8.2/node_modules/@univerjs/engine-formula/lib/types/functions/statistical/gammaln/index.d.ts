import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Gammaln extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
