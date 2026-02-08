import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class BinomDistRange extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(trials: BaseValueObject, probabilityS: BaseValueObject, numberS: BaseValueObject, numberS2?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
