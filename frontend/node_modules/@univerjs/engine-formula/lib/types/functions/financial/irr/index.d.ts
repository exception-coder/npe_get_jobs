import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Irr extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(values: BaseValueObject, guess?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _getValues;
    private _checkValues;
}
