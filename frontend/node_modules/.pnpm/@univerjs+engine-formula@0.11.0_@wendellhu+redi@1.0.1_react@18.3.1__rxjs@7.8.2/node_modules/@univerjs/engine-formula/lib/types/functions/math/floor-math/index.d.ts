import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class FloorMath extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, significance?: BaseValueObject, mode?: BaseValueObject): BaseValueObject;
}
