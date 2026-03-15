import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Marginoferror extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(range: BaseValueObject, confidence: BaseValueObject): BaseValueObject;
    private _getRangeValues;
}
