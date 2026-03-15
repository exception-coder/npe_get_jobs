import { BaseValueObject, ErrorValueObject } from '../../../engine/value-object/base-value-object';
import { NumberValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class Daverage extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(database: BaseValueObject, field: BaseValueObject, criteria: BaseValueObject): ErrorValueObject | NumberValueObject;
}
