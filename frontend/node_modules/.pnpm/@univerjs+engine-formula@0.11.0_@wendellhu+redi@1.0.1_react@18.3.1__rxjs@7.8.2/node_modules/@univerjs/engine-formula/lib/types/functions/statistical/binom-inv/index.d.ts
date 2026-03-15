import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class BinomInv extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(trials: BaseValueObject, probabilityS: BaseValueObject, alpha: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
