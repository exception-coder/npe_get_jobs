import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Second extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(serialNumber: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
