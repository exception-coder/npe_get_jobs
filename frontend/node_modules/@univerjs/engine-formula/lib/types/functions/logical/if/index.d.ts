import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class If extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(logicalTest: BaseValueObject, valueIfTrue: BaseValueObject, valueIfFalse?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
