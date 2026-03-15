import { BaseFunction } from '../../base-function';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
export declare class Fisher extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
