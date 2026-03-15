import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Product extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(...variants: BaseValueObject[]): BaseValueObject;
}
