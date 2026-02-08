import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class FInv extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(probability: BaseValueObject, degFreedom1: BaseValueObject, degFreedom2: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
