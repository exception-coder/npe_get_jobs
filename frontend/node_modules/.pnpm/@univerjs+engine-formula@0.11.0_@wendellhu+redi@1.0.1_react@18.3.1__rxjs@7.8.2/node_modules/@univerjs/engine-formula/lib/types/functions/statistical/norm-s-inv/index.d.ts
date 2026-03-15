import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class NormSInv extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(probability: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
