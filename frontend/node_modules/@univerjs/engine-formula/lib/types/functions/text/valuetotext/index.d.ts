import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Valuetotext extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(value: BaseValueObject, format?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
