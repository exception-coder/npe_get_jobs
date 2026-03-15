import { compareToken } from '../../../basics/token';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Compare extends BaseFunction {
    minParams: number;
    maxParams: number;
    private _compareType;
    setCompareType(token: compareToken): void;
    calculate(variant1: BaseValueObject, variant2: BaseValueObject): BaseValueObject;
}
