import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Text extends BaseFunction {
    minParams: number;
    maxParams: number;
    isArgumentsIgnoreNumberPattern(): boolean;
    calculate(text: BaseValueObject, formatText: BaseValueObject): BaseValueObject;
}
