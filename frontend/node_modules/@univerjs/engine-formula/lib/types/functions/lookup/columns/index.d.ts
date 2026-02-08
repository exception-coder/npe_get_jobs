import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Columns extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(reference: BaseValueObject): BaseValueObject;
}
