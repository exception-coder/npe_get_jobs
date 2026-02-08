import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Effect extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(nominalRate: BaseValueObject, npery: BaseValueObject): BaseValueObject;
}
