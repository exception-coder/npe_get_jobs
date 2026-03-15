import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class ChisqTest extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(actualRange: BaseValueObject, expectedRange: BaseValueObject): BaseValueObject;
    private _getResult;
}
