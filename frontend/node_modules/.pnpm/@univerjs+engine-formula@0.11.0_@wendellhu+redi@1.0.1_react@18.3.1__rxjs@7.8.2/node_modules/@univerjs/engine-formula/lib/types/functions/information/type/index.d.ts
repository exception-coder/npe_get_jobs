import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { NumberValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class Type extends BaseFunction {
    needsReferenceObject: boolean;
    minParams: number;
    maxParams: number;
    calculate(value: FunctionVariantType): NumberValueObject;
}
