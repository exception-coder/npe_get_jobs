import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { ErrorValueObject } from '../../../engine/value-object/base-value-object';
import { NumberValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class Areas extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    calculate(reference: FunctionVariantType): ErrorValueObject | NumberValueObject;
}
