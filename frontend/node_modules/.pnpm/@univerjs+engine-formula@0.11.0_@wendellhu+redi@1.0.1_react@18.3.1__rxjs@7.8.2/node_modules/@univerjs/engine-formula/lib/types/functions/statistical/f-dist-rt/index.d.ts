import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class FDistRt extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject, degFreedom1: BaseValueObject, degFreedom2: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
