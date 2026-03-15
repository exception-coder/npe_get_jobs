import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Convert extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(number: BaseValueObject, fromUnit: BaseValueObject, toUnit: BaseValueObject): BaseValueObject;
    private _lookupFromAndToUnits;
    private _lookupFromPrefix;
    private _lookupToPrefix;
    private _getTemperatureConversion;
    private _centigradeConversion;
    private _fahrenheitConversion;
    private _kelvinConversion;
    private _rankineConversion;
    private _reaumurConversion;
    private _units;
    private _binaryPrefixes;
    private _unitPrefixes;
}
