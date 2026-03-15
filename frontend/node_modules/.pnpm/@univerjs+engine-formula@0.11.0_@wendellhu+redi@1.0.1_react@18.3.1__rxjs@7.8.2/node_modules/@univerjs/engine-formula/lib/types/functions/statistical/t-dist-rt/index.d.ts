import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class TDistRt extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject, degFreedom: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
