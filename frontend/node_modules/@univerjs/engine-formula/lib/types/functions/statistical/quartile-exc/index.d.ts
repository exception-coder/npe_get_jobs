import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class QuartileExc extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(array: BaseValueObject, quart: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _getValues;
}
