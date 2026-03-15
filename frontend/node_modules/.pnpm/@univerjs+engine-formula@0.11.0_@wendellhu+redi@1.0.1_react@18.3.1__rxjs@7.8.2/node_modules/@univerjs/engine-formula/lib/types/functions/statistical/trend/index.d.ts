import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Trend extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(knownYs: BaseValueObject, knownXs?: BaseValueObject, newXs?: BaseValueObject, constb?: BaseValueObject): BaseValueObject;
    private _getResult;
    private _getResultByMultipleVariables;
    private _getResultBySimpleVariables;
    private _getKnownXsValues;
    private _getNewXsValues;
}
