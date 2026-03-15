import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Isbetween extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(valueToCompare: BaseValueObject, lowerValue: BaseValueObject, upperValue: BaseValueObject, lowerValueIsInclusive?: BaseValueObject, upperValueIsInclusive?: BaseValueObject): BaseValueObject;
}
