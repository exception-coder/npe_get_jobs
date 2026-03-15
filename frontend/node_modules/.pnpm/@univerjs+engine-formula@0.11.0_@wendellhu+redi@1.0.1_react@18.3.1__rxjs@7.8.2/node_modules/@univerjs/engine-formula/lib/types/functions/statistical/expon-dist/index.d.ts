import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class ExponDist extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject, lambda: BaseValueObject, cumulative: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
