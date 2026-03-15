import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Accrintm extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(issue: BaseValueObject, settlement: BaseValueObject, rate: BaseValueObject, par: BaseValueObject, basis?: BaseValueObject): BaseValueObject;
}
