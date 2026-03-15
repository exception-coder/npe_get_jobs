import { BaseValueObject, ErrorValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
/**
 * Lambda functions are unique and are generated directly by the higher level.
 * Please refer to the lambdaNode; here, it serves the purpose of a placeholder for the formula.
 */
export declare class Lambda extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(...variants: BaseValueObject[]): ErrorValueObject;
}
