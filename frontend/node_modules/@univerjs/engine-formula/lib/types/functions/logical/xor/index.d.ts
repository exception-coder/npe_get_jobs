import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Xor extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(...logicalValues: BaseValueObject[]): BaseValueObject;
}
