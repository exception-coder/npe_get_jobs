import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Regexreplace extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(text: BaseValueObject, regularExpression: BaseValueObject, replacement: BaseValueObject): BaseValueObject;
}
