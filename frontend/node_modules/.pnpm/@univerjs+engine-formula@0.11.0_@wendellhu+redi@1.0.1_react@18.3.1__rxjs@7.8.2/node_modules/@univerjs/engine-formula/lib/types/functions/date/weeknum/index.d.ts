import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Weeknum extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(serialNumber: BaseValueObject, returnType?: BaseValueObject): BaseValueObject;
    private _getResult;
    private _returnTypeMap;
}
