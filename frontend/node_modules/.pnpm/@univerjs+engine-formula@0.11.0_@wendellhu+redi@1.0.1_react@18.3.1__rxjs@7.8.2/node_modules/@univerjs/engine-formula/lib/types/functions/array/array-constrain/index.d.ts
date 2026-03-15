import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class ArrayConstrain extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(inputRange: BaseValueObject, numRows: BaseValueObject, numCols: BaseValueObject): BaseValueObject;
}
