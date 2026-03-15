import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { StringValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class Concat extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(...textValues: BaseValueObject[]): StringValueObject;
}
