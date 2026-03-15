import { BooleanValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class True extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(): BooleanValueObject;
}
