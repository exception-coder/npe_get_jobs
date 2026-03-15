import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Roundbank extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, numDigits: BaseValueObject): BaseValueObject;
    private _roundBank;
}
