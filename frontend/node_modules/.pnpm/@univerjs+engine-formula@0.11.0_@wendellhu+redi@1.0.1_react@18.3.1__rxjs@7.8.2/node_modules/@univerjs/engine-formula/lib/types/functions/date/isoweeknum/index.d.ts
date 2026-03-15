import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Isoweeknum extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(date: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
