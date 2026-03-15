import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Syd extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(cost: BaseValueObject, salvage: BaseValueObject, life: BaseValueObject, per: BaseValueObject): BaseValueObject;
}
