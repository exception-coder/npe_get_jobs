import { NumberValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class Today extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(): NumberValueObject;
}
