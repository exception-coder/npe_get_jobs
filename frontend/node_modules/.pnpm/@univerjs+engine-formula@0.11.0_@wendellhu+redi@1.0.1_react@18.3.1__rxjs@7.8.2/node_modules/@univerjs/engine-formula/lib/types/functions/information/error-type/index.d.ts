import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class ErrorType extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(errorVal: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _errorTypeValueMap;
}
