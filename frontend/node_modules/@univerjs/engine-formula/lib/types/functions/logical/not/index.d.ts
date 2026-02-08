import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Not extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(logical: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
