import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Concatenate extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(...textValues: BaseValueObject[]): BaseValueObject;
}
