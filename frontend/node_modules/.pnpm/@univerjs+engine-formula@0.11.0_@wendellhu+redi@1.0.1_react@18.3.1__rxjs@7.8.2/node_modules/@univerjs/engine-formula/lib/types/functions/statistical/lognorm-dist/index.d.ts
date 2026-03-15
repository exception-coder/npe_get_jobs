import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class LognormDist extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject, mean: BaseValueObject, standardDev: BaseValueObject, cumulative: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
