import { BaseValueObject, ErrorValueObject } from '../../../engine/value-object/base-value-object';
import { AsyncArrayObject } from '../../../engine/reference-object/base-reference-object';
import { BaseFunction } from '../../base-function';
export declare class Makearray extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(...variants: BaseValueObject[]): ErrorValueObject | AsyncArrayObject;
    isAsync(): boolean;
}
