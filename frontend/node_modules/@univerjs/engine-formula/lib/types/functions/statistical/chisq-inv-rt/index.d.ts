import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class ChisqInvRt extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(probability: BaseValueObject, degFreedom: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
