import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Datevalue extends BaseFunction {
    minParams: number;
    maxParams: number;
    isArgumentsIgnoreNumberPattern(): boolean;
    calculate(dateText: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
