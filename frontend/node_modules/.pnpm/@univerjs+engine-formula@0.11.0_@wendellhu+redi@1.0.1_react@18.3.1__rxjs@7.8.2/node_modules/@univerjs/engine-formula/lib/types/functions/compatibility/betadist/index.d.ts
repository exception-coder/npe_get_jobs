import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Betadist extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(x: BaseValueObject, alpha: BaseValueObject, beta: BaseValueObject, A?: BaseValueObject, B?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
