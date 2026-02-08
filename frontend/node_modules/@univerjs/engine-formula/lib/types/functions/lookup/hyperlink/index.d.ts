import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Hyperlink extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(url: BaseValueObject, linkLabel?: BaseValueObject): BaseValueObject;
}
