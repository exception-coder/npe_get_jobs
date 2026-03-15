import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class BinomDist extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(numberS: BaseValueObject, trials: BaseValueObject, probabilityS: BaseValueObject, cumulative: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
