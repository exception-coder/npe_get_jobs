import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Vdb extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(cost: BaseValueObject, salvage: BaseValueObject, life: BaseValueObject, startPeriod: BaseValueObject, endPeriod: BaseValueObject, factor?: BaseValueObject, noSwitch?: BaseValueObject): BaseValueObject;
    private _getResultArray;
    private _getResult;
    private _getVdb;
}
