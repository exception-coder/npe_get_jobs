import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Csch extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(variant: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
