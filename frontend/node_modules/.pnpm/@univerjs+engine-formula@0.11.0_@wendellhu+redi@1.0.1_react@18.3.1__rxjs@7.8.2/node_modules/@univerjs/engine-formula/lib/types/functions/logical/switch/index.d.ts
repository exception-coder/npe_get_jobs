import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Switch extends BaseFunction {
    minParams: number;
    calculate(expression: BaseValueObject, ...args: BaseValueObject[]): BaseValueObject;
    private _handleNonArrayInputs;
    private _handleArrayInputs;
}
