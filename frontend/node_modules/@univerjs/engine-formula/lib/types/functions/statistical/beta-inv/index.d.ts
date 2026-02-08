import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class BetaInv extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(probability: BaseValueObject, alpha: BaseValueObject, beta: BaseValueObject, A?: BaseValueObject, B?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
