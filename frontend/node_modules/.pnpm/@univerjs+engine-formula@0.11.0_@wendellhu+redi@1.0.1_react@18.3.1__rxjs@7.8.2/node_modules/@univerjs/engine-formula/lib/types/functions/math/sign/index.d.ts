import { BaseFunction } from '../../base-function';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
export declare class Sign extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
