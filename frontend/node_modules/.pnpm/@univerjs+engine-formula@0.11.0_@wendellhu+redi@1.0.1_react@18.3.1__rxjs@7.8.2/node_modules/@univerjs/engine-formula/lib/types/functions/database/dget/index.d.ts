import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Dget extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(database: BaseValueObject, field: BaseValueObject, criteria: BaseValueObject): BaseValueObject;
}
