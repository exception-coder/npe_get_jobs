import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Days360 extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(startDate: BaseValueObject, endDate: BaseValueObject, method?: BaseValueObject): BaseValueObject;
}
