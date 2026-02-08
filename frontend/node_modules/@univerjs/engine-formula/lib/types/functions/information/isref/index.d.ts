import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { BooleanValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class Isref extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    calculate(value: FunctionVariantType): BooleanValueObject;
}
