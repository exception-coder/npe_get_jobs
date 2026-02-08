import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Tbillprice extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(settlement: BaseValueObject, maturity: BaseValueObject, discount: BaseValueObject): BaseValueObject;
}
