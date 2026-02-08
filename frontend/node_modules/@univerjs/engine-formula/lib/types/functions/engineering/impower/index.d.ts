import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Impower extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(inumber: BaseValueObject, number: BaseValueObject): BaseValueObject;
}
