import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Cube extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(...variants: BaseValueObject[]): BaseValueObject;
}
