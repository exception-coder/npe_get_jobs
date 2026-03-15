import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Column extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(reference?: BaseValueObject): BaseValueObject | ArrayValueObject;
}
