import { BaseValueObject, ErrorValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
/**
 * Please refer to the _changeLetToLambda function; here, it serves the purpose of a placeholder for the formula.
 */
export declare class Let extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(...variants: BaseValueObject[]): ErrorValueObject;
}
