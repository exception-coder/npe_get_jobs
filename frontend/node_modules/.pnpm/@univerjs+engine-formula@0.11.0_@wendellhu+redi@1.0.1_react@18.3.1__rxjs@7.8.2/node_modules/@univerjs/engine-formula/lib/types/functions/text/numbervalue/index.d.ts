import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Numbervalue extends BaseFunction {
    minParams: number;
    maxParams: number;
    isArgumentsIgnoreNumberPattern(): boolean;
    calculate(text: BaseValueObject, decimalSeparator?: BaseValueObject, groupSeparator?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
