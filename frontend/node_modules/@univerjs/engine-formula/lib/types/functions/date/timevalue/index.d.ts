import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Timevalue extends BaseFunction {
    minParams: number;
    maxParams: number;
    isArgumentsIgnoreNumberPattern(): boolean;
    calculate(timeText: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
