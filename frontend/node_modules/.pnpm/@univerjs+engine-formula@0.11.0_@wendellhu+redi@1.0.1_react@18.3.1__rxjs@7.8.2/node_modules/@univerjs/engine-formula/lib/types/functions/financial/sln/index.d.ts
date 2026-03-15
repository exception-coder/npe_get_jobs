import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Sln extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(cost: BaseValueObject, salvage: BaseValueObject, life: BaseValueObject): BaseValueObject;
}
