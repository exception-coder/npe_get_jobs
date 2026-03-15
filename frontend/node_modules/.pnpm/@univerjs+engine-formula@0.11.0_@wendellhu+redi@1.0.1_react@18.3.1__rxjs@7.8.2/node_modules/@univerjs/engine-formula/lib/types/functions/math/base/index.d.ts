import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { StringValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';
export declare class Base extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, radix: BaseValueObject, minLength?: BaseValueObject): BaseValueObject | StringValueObject;
    private _handleSingleObject;
}
