import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Ifs extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(...params: BaseValueObject[]): BaseValueObject;
}
