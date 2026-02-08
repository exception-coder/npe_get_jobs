import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Oct2hex extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, places?: BaseValueObject): BaseValueObject;
}
