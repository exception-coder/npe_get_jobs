import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Ddb extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(cost: BaseValueObject, salvage: BaseValueObject, life: BaseValueObject, period: BaseValueObject, factor?: BaseValueObject): BaseValueObject;
}
