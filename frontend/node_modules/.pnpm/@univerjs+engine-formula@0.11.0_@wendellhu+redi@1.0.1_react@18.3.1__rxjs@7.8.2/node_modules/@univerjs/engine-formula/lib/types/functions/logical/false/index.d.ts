import { BooleanValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class False extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(): BooleanValueObject;
}
